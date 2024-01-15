import { makeRequest } from "../../helpers/makeRequest";
import { IDeleteTaskRequest, IDeleteTaskResponse } from "../protocols/deleteTask";

export const deleteTask = async (
  data: IDeleteTaskRequest
): Promise<IDeleteTaskResponse> => {
  const request = makeRequest();
  const response = await request.delete<IDeleteTaskResponse>({
    url: `/task/${data.id}`,
  });

  return response.data;
};
