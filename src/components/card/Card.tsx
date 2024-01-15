import { CreateTaskContext } from "@/context/context";
import { formatDate } from "@/helpers/format/date";
import { StatusType } from "@/services/api/task/protocols/changeStatusTask";
import { changeStatusTask } from "@/services/api/task/useCase/changeStatusTask";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import { CardProps } from "./interface";

export const Card = ({ task }: CardProps) => {
  const router = useRouter();
  const { tasks, setTasks } = useContext(CreateTaskContext);

  const handleChangeStatus = async (newStatus: StatusType) => {
    try {
      await changeStatusTask({ id: task.id, status: newStatus });
      const _task = tasks.find((item) => item.id === task.id);
      _task!.status = newStatus;
      const _tasks = tasks.filter((item) => item.id !== task.id);
      _tasks.push(_task!);
      setTasks && setTasks(_tasks);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ?? "Houve um trocar o status da tarefa"
      );
    }
  };

  const getStatus = (oldStatus: StatusType) =>
    oldStatus === "Não concluído" ? "Concluído" : "Não concluído";

  const classToWrapper = "mt-2";
  const classToLabel = "text-sm text-neutral-700";
  const classToContent = "text-gray-800";
  return (
    <div className="py-2 px-2 mb-3 bg-white w-full rounded shadow-sm cursor-pointer">
      <div onClick={() => router.push(`/form?id=${task.id}`)}>
        <p className="text-lg font-semibold text-gray-700">{task.title}</p>
        <div className={classToWrapper}>
          <p className={classToLabel}>Descrição</p>
          <p className={classToContent}>{task.description}</p>
        </div>
        <div className={classToWrapper}>
          <p className={classToLabel}>Prioridade:</p>
          <p className={classToContent}>{task.priority}</p>
        </div>
        <div className={classToWrapper}>
          <p className={classToLabel}>Data para conclusão:</p>
          <p className={classToContent}>
            {formatDate(task.completionDate, "dd/MM/yyyy")}
          </p>
        </div>
      </div>
      <div className={classToWrapper}>
        <p className={classToLabel}>Status:</p>
        <div className="flex items-center">
          <p className={classToContent}>{task.status}</p>
          <input
            className="ml-3 h-5 w-5 cursor-pointer"
            type="checkbox"
            checked={task.status === "Concluído"}
            onClick={() => {
              const newStatus = getStatus(task.status);
              handleChangeStatus(newStatus);
            }}
          />
        </div>
      </div>
    </div>
  );
};
