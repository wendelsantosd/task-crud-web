export interface IChangeStatusTaskRequest {
  id: string;
  status: StatusType;
}

export interface IChangeStatusTaskResponse {
  message: string;
}

export type StatusType = "Concluído" | "Não concluído";
