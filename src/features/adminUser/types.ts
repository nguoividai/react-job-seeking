export type CreateAccountForm = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  agree?: boolean;
  firstName?: string;
  lastName?: string;
  partnerId?: string;
  currency?: string;
  language?: string;
};

export type ForgotForm = {
  email?: string;
};

export type AdminUserReducer = {
  ui?: {
    loading?: boolean;
    loadingBtn?: boolean;
  };
};
