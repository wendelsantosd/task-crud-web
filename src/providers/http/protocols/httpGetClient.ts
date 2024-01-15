import { IResponse } from './response';

export type IHttpGetClientDTO = {
  url: string;
  query?: Record<string, unknown>;
  headers?: Record<string, unknown>;
};
export interface IHttpGetClient {
  get: <T>(data: IHttpGetClientDTO) => Promise<IResponse<T>>;
}
