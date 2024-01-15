import { IResponse } from './response';

export type IHttpPutClientDTO<D> = {
  url: string;
  body?: D;
  headers?: Record<string, unknown>;
};
export interface IHttpPutClient {
  put: <T, D = unknown>(data: IHttpPutClientDTO<D>) => Promise<IResponse<T>>;
}
