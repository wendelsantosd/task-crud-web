import { Loading } from "@/components/Loading/Loading"
import { ITask } from "@/services/api/task/protocols/getTasks"
import { getTasks } from "@/services/api/task/useCase/getTasks"
import { ReactNode, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { CreateTaskContext } from "./context"

type Props = {
  children: ReactNode
}

export const TaskProviderContext = ({ children }: Props): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.tasks);
      setLoading(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? 'Houve erro ao buscar as tarefas.')
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return <CreateTaskContext.Provider
    value={{
      tasks: tasks,
      setTasks: setTasks,
    }}
  >
    <div className="relative">
      {children}
      {loading && <Loading />}
      <ToastContainer />
    </div>
  </CreateTaskContext.Provider>
}