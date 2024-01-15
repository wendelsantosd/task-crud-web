import { ITask } from "./getTasks";

export interface ICreateTaskRequest extends ITask {}

export interface ICreateTaskResponse {
  message: string;
  task: ITask;
}
