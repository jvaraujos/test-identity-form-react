export type AddEditUserCommand = {
  id?: string | undefined;
  isActive?: boolean;
  email?: string | undefined;
  document?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  zipCode?: number | undefined;
  ibge?: number | undefined;
  xIbge?: string | undefined;
  uf?: string | undefined;
  city?: string | undefined;
  address?: string | undefined;
  number?: string | undefined;
  addressComplement?: string | undefined;
  subscribeId?: string | undefined;
  profileId?: string | undefined;
};

export type ProfilePicture = {
  id: string;
  uploadFile: File | undefined;
};

export type AddBillingCardCommand = {
  cardNumber: string;
  cardBrand: number;
  cardDocument: string;
  cvv: string;
  nameOfCard: string;
  validTo: Date | null;
};

export type AddBillingAddressCommand = {
  number: number | undefined;
  address: string | undefined;
  uf: string | undefined;
  ibge?: number | undefined;
  zipCode?: number | undefined;
  name: string;
  isDefault: boolean;
  billingAddressType: number;
  phoneNumber: string | undefined;
  addressComplement: string | undefined;
};

export type ChartSeries = {
  name?: string | undefined;
  data?: number[] | undefined;
  dataDecimal?: number[] | undefined;
};
