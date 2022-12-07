export interface Authentication {
  appSettings?: {
    productListStyle?: string | null;
    reloadMenuAfterOrderActions?: string | null;
    reloadOrderListAfterOrderActions?: string | null;
  };
  expiresAt?: string | null;
  issuedAt?: string | null;
  tokenString?: string | null;
  userId?: string | null;
  listRole?: {
    id?: string | null;
    code?: string | null;
    isSystem?: boolean | null;
    name?: string | null;
  }[];
  userModel: {
    address?: string | null;
    applicationId?: string | null;
    avatarUrl?: string | null;
    birthdate?: string | null;
    company?: string | null;
    countryCode?: string | null;
    currency?: string | null;
    designation?: string | null;
    email?: string | null;
    gtsNumber?: number | null;
    id?: string | null;
    identificationNumber?: number | null;
    industryString?: string | null;
    isActive?: boolean | null;
    isLockedOut?: boolean | null;
    language?: string | null;
    lastActivityDate?: string | null;
    level?: number | null;
    locationCode?: string | null;
    locationString?: string | null;
    name?: string | null;
    phoneNumber?: string | null;
    timeZone?: string | null;
    type?: string | null;
    userName?: string | null;
  };
}

export type AuthenticationReducer = {
  ui?: {
    loadingBtn?: boolean;
  };
  authentication?: Authentication;
};

export type LoginForm = {
  username?: string;
  password?: string;
};
