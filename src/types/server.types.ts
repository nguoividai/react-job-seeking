export type ResponseServerAPI<T = Object> = {
  data: T;
  success?: boolean;
  message?: string;
};
