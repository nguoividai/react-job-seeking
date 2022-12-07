export type ResponseServerAPI<T = Object> = {
  code?: number | string;
  data: T;
  isSuccess?: boolean;
  message?: string;
  totalTime?: number;
};
