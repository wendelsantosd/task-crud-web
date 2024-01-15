import { ITask } from "./getTasks";

export interface IGetTaskByIdResponse extends ITask {}

export interface IGetTaskByIdRequest {
  id: string;
}
