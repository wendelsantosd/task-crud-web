import { makeRequest } from "../../helpers/makeRequest";
import { IUpdateTaskRequest, IUpdateTaskResponse } from "../protocols/updateTask";

export const updateTask = async (
  data: IUpdateTaskRequest
): Promise<IUpdateTaskResponse> => {
  const request = makeRequest();
  const response = await request.put<IUpdateTaskResponse>({
    url: `/task/${data.id}`,
    body: data.task,
  });

  return response.data;
};
