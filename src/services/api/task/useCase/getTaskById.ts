import { makeRequest } from "../../helpers/makeRequest";
import { IGetTaskByIdRequest, IGetTaskByIdResponse } from "../protocols/getTaskById";

export const getTaskById = async (
  data: IGetTaskByIdRequest
): Promise<IGetTaskByIdResponse> => {
  const request = makeRequest();
  const response = await request.get<IGetTaskByIdResponse>({
    url: `/task/${data.id}`,
  });

  return response.data;
};
