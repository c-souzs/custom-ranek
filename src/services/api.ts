import axios, { AxiosError, AxiosRequestConfig } from 'axios';

interface ErrorData {
  code: string
  data: { message: number }
  message: string
}

interface ResponseValidateToken {
  code: string
  data: {
    status: number
  }
}

const url = 'https://ranekapi.origamid.dev/json';

const axiosInstance = axios.create({
  baseURL: `${url}/api`,
});

// Trabalha o erro da requisição para ser mais fácil de manipular
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorAxios = error as AxiosError;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const errorData = errorAxios.response!.data as ErrorData;

    return Promise.reject(errorData);
  },
);

// Verifica se há um token no local storage, caso tenha toda requisição vai com Authorization Token
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { token } = window.localStorage;

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export const api = {
  get: <T>(endpoint: string) => axiosInstance.get<T>(endpoint),
  post: <T, U>(endpoint: string, body: U) => axiosInstance.post<T>(endpoint, body),
  put: <T, U>(endpoint: string, body: U) => axiosInstance.put<T>(endpoint, body),
  delete: <T>(endpoint: string) => axiosInstance.delete<T>(endpoint),
  token: <T, U>(body: U) => axiosInstance.post<T>(`${url}/jwt-auth/v1/token`, body),
  validateToken: () => axiosInstance.post<ResponseValidateToken>(`${url}/jwt-auth/v1/token/validate`),
};
