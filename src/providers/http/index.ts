import axios from 'axios';
import { HttpClient } from './httpClient';

type IHttpDTO = {
  baseURL?: string;
  headers?: Record<string, unknown>;
};

export const makeHttp = ({
  baseURL = process.env.NEXT_PUBLIC_APP_API_URL,
  headers = {},
}: IHttpDTO = {}): HttpClient => {
  const request = axios.create({
    baseURL,
    headers: {
      ...headers,
    },
  });

  const http = new HttpClient(request);

  return http;
};
