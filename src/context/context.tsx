import { ITask } from "@/services/api/task/protocols/getTasks";
import React, { createContext, SetStateAction } from "react";

interface TaskContextType {
  tasks: ITask[];
  loading: boolean;
  setTasks?: React.Dispatch<SetStateAction<ITask[]>>;
  setLoading?: React.Dispatch<SetStateAction<boolean>>;
}

const defaultTasks = {
  tasks: [],
  loading: false,
};

export const CreateTaskContext = createContext<TaskContextType>(defaultTasks);
