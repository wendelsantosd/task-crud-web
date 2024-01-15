import { ITask } from "@/services/api/task/protocols/getTasks";
import React, { createContext, SetStateAction } from "react";

interface TaskContextType {
  tasks: ITask[];
  setTasks?: React.Dispatch<SetStateAction<ITask[]>>;
}

const defaultTasks = {
  tasks: [],
};

export const CreateTaskContext = createContext<TaskContextType>(defaultTasks);
