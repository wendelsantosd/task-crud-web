import axios from "axios";
import {
  IHttpGetClient,
  IHttpGetClientDTO,
  IHttpPostClient,
  IHttpPostClientDTO,
  IHttpPatchClient,
  IHttpPatchClientDTO,
  IHttpPutClient,
  IHttpPutClientDTO,
  IResponse,
  IRequest,
  IHttpDeleteClient,
  IHttpDeleteClientDTO,
} from "./protocols";

export class HttpClient
  implements
    IHttpGetClient,
    IHttpPostClient,
    IHttpPatchClient,
    IHttpPutClient,
    IHttpDeleteClient
{
  constructor(private request: IRequest = axios) {}

  public async get<T>({
    url,
    headers,
    query,
  }: IHttpGetClientDTO): Promise<IResponse<T>> {
    const response = await this.request.get<T>(url, {
      params: query,
      ...headers,
    });
    return response;
  }

  public async post<T, D = unknown>({
    url,
    body,
    headers,
  }: IHttpPostClientDTO<D>): Promise<IResponse<T>> {
    const response = await this.request.post<T>(url, body, { ...headers });
    return response;
  }

  public async patch<T>({
    url,
    body,
    headers,
  }: IHttpPatchClientDTO): Promise<IResponse<T>> {
    const response = await this.request.patch<T>(url, body, { ...headers });
    return response;
  }

  public async put<T, D = unknown>({
    url,
    body,
    headers,
  }: IHttpPutClientDTO<D>): Promise<IResponse<T>> {
    const response = await this.request.put<T>(url, body, { ...headers });
    return response;
  }

  public async delete<T>({
    url,
    headers,
    query,
  }: IHttpDeleteClientDTO): Promise<IResponse<T>> {
    const response = await this.request.delete<T>(url, {
      params: query,
      ...headers,
    });
    return response;
  }
}
