export type AddEditDocumentIdentityCommand = {
    id?: string | undefined;
    birthDate: Date|null;
    firstName: string;
    lastName: string;
    document: string;
    frontFile: File|null ;
    backFile: File|null ;
    capturedFile: File |null;
  };
  