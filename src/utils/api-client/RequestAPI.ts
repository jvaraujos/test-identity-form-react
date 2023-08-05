import axios, { AxiosInstance } from 'axios';


abstract class RequestAPI {
  protected readonly instance: AxiosInstance;

  protected baseURL: string;

  protected isRefreshing: boolean;

  protected isAuthenticated: boolean;

  protected failedRequests: any[] = [];

  protected customApiKey: any;

  constructor(_baseURL: string, _isAuthenticated = true) {
    this.baseURL = _baseURL;
    this.isRefreshing = false;
    this.isAuthenticated = _isAuthenticated;
    this.failedRequests = [];

    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        Accept: 'application/json, */*',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    this.beforeRequest = this.beforeRequest.bind(this);
    this.processQueue = this.processQueue.bind(this);

    this.instance.interceptors.request.use(this.beforeRequest);
    this.instance.interceptors.response.use(this.onRequestSuccess);
  }

  beforeRequest(request: any) {
    if (this.isAuthenticated) {
      const  accessToken  =''
      request.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    }

    return request;
  }

  onRequestSuccess(response: any) {
    return response.data;
  }

  public getRefreshToken = async (refreshToken: string, token: string): Promise<any> => {
    const data = {
      refreshToken,
      token,
    };

    try {
      const response = await this.instance?.post('/api/identity/token/refresh', data);
      console.log(response);
      return response;
    } catch (e) {
      console.log('getRefreshToken error', e);
    }
  };

  processQueue(error: any, access_token: string) {
    this.failedRequests.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(access_token);
      }
    });
    this.failedRequests = [];
  }
}
export default RequestAPI;
