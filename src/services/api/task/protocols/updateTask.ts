import { ITask } from "./getTasks";

export interface IUpdateTaskRequest {
  id: string;
  task: ITask;
}

export interface IUpdateTaskResponse {
  message: string;
  task: ITask;
}
