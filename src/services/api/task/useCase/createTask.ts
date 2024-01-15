import { makeRequest } from "../../helpers/makeRequest";
import { ICreateTaskRequest, ICreateTaskResponse } from "../protocols/createTask";

export const createTask = async (
  data: ICreateTaskRequest
): Promise<ICreateTaskResponse> => {
  const request = makeRequest();
  const response = await request.post<ICreateTaskResponse>({
    url: "/task",
    body: data,
  });

  return response.data;
};
