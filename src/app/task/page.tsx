"use client";
import { Card } from "@/components/card/Card";
import { CreateTaskContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Task() {
  const { tasks } = useContext(CreateTaskContext);
  const router = useRouter();

  const classToWrapCard = "flex flex-col items-center w-96 mr-4 py-2 h-screen";
  const classToTitleCard = "text-xl font-semibold text-gray-600 mb-3";
  return (
    <div className="flex flex-col items-center bg-slate-50 h-full w-full">
      <button
        className="mt-20 py-2 px-4 bg-green-500 text-white font-semibold rounded shadow-lg hover:bg-green-700 hover:shadow-sm hover:text-opacity-75 transition duration-300 ease-in-out"
        onClick={() => router.replace("/form")}
      >
        Criar Tarefa
      </button>
      <div className="mt-10 flex justify-between w-3/6">
        <div className={classToWrapCard}>
          <p className={classToTitleCard}>Para fazer</p>
          {tasks?.map((item) => {
            if (item.status === "Não concluído")
              return <Card task={item} key={item.id} />;
          })}
        </div>

        <div className={classToWrapCard}>
          <p className={classToTitleCard}>Feito</p>
          {tasks?.map((item) => {
            if (item.status === "Concluído")
              return <Card task={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
