import { makeRequest } from "../../helpers/makeRequest";
import { IGetTasksResponse } from "../protocols/getTasks";

export const getTasks = async (): Promise<IGetTasksResponse> => {
  const request = makeRequest();
  const response = await request.get<IGetTasksResponse>({
    url: "/task",
  });

  return response.data;
};
