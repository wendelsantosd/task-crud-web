import { Card } from "@/components/card/Card"
import { ITask } from "@/components/card/interface";

export default function Task() {
  const TASKS: ITask[] = [
    {
      "id": "16786688-18e4-4ddc-9201-f27a6a2c798b",
      "title": "Tarefa 1",
      "description": "Descrição da tarefa 1",
      "priority": "Baixa",
      "status": "Concluído",
      "completionDate": "2024-01-15T23:59:59.148Z",
      "createdAt": "2024-01-14T00:11:23.918Z",
      "updatedAt": "2024-01-14T00:11:23.918Z"
    },
    {
      "id": "f72524de-0ba1-445f-934a-2578e4df8e2f",
      "title": "Tarefa 2",
      "description": "Descrição da tarefa 2",
      "priority": "Média",
      "status": "Não concluído",
      "completionDate": "2024-01-15T23:59:59.148Z",
      "createdAt": "2024-01-14T00:11:46.419Z",
      "updatedAt": "2024-01-14T00:11:46.419Z"
    },
    {
      "id": "7097f66a-44a6-462f-81c6-b6ddb7dc7047",
      "title": "Tarefa 3 Edit",
      "description": "Descrição da tarefa 3 Edit",
      "priority": "Média",
      "status": "Não concluído",
      "completionDate": "2024-01-15T23:59:59.148Z",
      "createdAt": "2024-01-14T00:11:59.299Z",
      "updatedAt": "2024-01-14T00:15:49.810Z"
    }
  ]

  const classToWrapCard = 'flex flex-col items-center w-96 mr-4 py-2 h-screen';
  const classToTitleCard = 'text-xl font-semibold text-gray-600 mb-3';
  return <div className="flex flex-col items-center bg-slate-50 h-screen w-full">
    <button className="mt-20 py-2 px-4 bg-green-500 text-white font-semibold rounded shadow-lg hover:bg-green-700 hover:shadow-sm hover:text-opacity-75 transition duration-300 ease-in-out">
      Criar Tarefa
    </button>
    <div className="mt-10 flex justify-between w-3/6">
      <div className={classToWrapCard}>
        <p className={classToTitleCard}>Para fazer</p>
        {TASKS.map(item => {
          if (item.status === 'Não concluído') return <Card task={item} key={item.id}/>
        })}
      </div>

      <div className={classToWrapCard}>
        <p className={classToTitleCard}>Feito</p>
        {TASKS.map(item => {
          if (item.status === 'Concluído') return <Card task={item} key={item.id}/>
        })}
      </div>
    </div>
  </div>
}