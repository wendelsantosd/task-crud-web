import { IResponse } from './response';

export type IHttpPostClientDTO<T> = {
  url: string;
  body?: T;
  headers?: Record<string, unknown>;
};
export interface IHttpPostClient {
  post: <Res, Req = Res>(
    data: IHttpPostClientDTO<Req>,
  ) => Promise<IResponse<Res>>;
}
