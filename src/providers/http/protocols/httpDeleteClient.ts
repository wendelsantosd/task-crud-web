import { IResponse } from './response';

export type IHttpDeleteClientDTO = {
  url: string;
  query?: Record<string, unknown>;
  headers?: Record<string, unknown>;
};

export interface IHttpDeleteClient {
  delete: <T>(data: IHttpDeleteClientDTO) => Promise<IResponse<T>>;
}
