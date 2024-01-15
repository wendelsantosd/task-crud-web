export interface IGetTasksResponse {
  farmers: ITask[];
  metadata: {
    count: number;
  };
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: "Alta" | "Média" | "Baixa";
  status: "Não concluído" | "Concluído";
  completionDate: string;
  createdAt: string;
  updatedAt: string;
}