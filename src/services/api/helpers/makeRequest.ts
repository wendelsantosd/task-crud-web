import { makeHttp } from "../../../providers/http";
import { HttpClient } from "../../../providers/http/httpClient";

export const makeRequest = (): HttpClient => {
  const request = makeHttp({
    headers: {},
  });

  return request;
};
