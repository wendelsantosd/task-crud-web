import { formatDate } from "@/helpers/format/date";
import { CardProps } from "./interface"

export const Card = ({ task }: CardProps) => {
  const classToWrapper = 'mt-2';
  const classToLabel = 'text-sm text-neutral-700';
  const classToContent = 'text-gray-800';

  return <div className="py-2 px-2 mb-3 bg-white w-full rounded shadow-sm">
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
      <p className={classToContent}>{formatDate(task.completionDate)}</p>
    </div>
    <div className={classToWrapper}>
      <p className={classToLabel}>Status:</p>
      <div className="flex items-center">
        <p className={classToContent}>{task.status}</p>
        <input className="ml-3 h-5 w-5" type="checkbox" checked={task.status === 'Concluído'} />
      </div>
    </div>
  </div>
}