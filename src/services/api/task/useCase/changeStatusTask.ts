import { makeRequest } from "../../helpers/makeRequest";
import {
  IChangeStatusTaskRequest,
  IChangeStatusTaskResponse,
} from "../protocols/changeStatusTask";

export const changeStatusTask = async (
  data: IChangeStatusTaskRequest
): Promise<IChangeStatusTaskResponse> => {
  const request = makeRequest();
  const response = await request.patch<IChangeStatusTaskResponse>({
    url: `/task/${data.id}`,
    body: {
      status: data.status,
    },
  });

  return response.data;
};
