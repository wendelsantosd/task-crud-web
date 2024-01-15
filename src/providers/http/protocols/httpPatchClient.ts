import { IResponse } from './response';

export type IHttpPatchClientDTO = {
  url: string;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
};
export interface IHttpPatchClient {
  patch: <T>(data: IHttpPatchClientDTO) => Promise<IResponse<T>>;
}
