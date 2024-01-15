"use client";

import { CreateTaskContext } from "@/context/context";
import { formatDate } from "@/helpers/format/date";
import { ITask } from "@/services/api/task/protocols/getTasks";
import { createTask } from "@/services/api/task/useCase/createTask";
import { getTaskById } from "@/services/api/task/useCase/getTaskById";
import { addDaysToDate } from "@/utils/add-days-to-date";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Form() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const { loading, setLoading, tasks, setTasks } =
    useContext(CreateTaskContext);
  const [fieldsWithError, setFieldsWithError] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const [task, setTask] = useState<ITask>({
    completionDate: formatDate(addDaysToDate(new Date(), 1), "yyyy-MM-dd"),
    priority: "Média",
  } as ITask);
  const [completionDate, setCompletionDate] = useState('');

  const isValidData = () => {
    let isValidTitle = false;
    let isValidDescription = false;

    if (task.title && task.title !== "") {
      const _fieldsWithError = fieldsWithError.filter(
        (item) => item !== "title"
      );
      setFieldsWithError(_fieldsWithError as string[]);
      isValidTitle = true;
    } else {
      if (!fieldsWithError.includes("title")) {
        fieldsWithError.push("title");
        setFieldsWithError([...fieldsWithError]);
      }
      isValidTitle = false;
    }

    if (task.description && task.description !== "") {
      const _fieldsWithError = fieldsWithError.filter(
        (item) => item !== "description"
      );
      setFieldsWithError(_fieldsWithError);
      isValidDescription = true;
    } else {
      if (!fieldsWithError.includes("description")) {
        fieldsWithError.push("description");
        setFieldsWithError([...fieldsWithError]);
      }
      isValidDescription = false;
    }

    return isValidTitle && isValidDescription;
  };

  const handleSubmitSave = async () => {
    if (!isValidData()) return;
    try {
      setLoading && setLoading(true);
      const response = await createTask({ ...task });
      tasks.push(response.task);
      setTasks && setTasks(tasks);
      toast.success(response.message);
      router.replace("/task");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ?? "Houve um erro ao adicionar tarefa"
      );
    } finally {
      setLoading && setLoading(false);
    }
  };

  const handleGetTaskById = async () => {
    try {
      setLoading && setLoading(true);
      const response = await getTaskById({ id });
      setTask({
        ...response,
      });
      setCompletionDate(formatDate(response.completionDate, "yyyy-MM-dd"))
      setLoading && setLoading(false);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Houve um erro ao buscar dados da tarefa"
      );
      router.replace("/task");
    } finally {
      setLoading && setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleGetTaskById();
    } else {
      setCompletionDate(formatDate(addDaysToDate(new Date(), 1), "yyyy-MM-dd"))
    }
  }, []);

  return (
    <div className="flex flex-col items-center bg-slate-50 h-screen w-full">
      <div className="mt-20 py-4 px-4 bg-white w-4/12 rounded shadow-sm">
        <div className="flex justify-between mb-5">
          <p className="text-xl font-semibold text-gray-700">Criar Tarefa</p>
          <button
            className="flex items-center justify-center bg-red-600 w-10 shadow rounded hover:bg-red-700 hover:shadow-sm transaction duration-300 ease-in-out"
            onClick={() => {
              console.log(task);
              console.log(fieldsWithError);
            }}
          >
            <FaTrash className="text-white text-lg" />
          </button>
        </div>

        <form>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Título</label>
            <input
              className="rounded px-1 py-1 focus:outline-none border-2 border-gray-300"
              defaultValue={task.title}
              onChange={(e) => {
                task.title = e.target.value;
                setTask(task);
              }}
              placeholder="Digite o título da tarefa"
            />

            {fieldsWithError.includes("title") && (
              <p className="text-sm text-red-500 mt-1">
                O título precisa ser preenchido.
              </p>
            )}
          </div>

          <div className="flex flex-col mt-3">
            <label className="text-gray-700 mb-1">Descrição</label>
            <textarea
              className="rounded px-1 py-1 focus:outline-none border-2 border-gray-300 h-40"
              defaultValue={task.description}
              onChange={(e) => {
                task.description = e.target.value;
                setTask(task);
              }}
              placeholder="Digite a descrição da tarefa"
            />

            {fieldsWithError.includes("description") && (
              <p className="text-sm text-red-500 mt-1">
                A descrição precisa ser preenchida.
              </p>
            )}
          </div>

          <div className="flex mt-3">
            <div className="flex flex-col mr-10 w-40">
              <label className="text-gray-700 mb-1">Data para conclusão</label>
              <input
                className="rounded px-1 py-1 focus:outline-none border-2 border-gray-300 h-8"
                defaultValue={completionDate}
                onChange={(e) => {
                  task.completionDate = e.target.value;
                  setTask(task);
                  setCompletionDate(formatDate(addDaysToDate(new Date(e.target.value), 1), "yyyy-MM-dd"))
                }}
                type="date"
              />
            </div>

            <div className="flex flex-col w-40">
              <label className="text-gray-700 mb-1">Prioridade</label>
              <select
                className="rounded px-1 py-1 focus:outline-none border-2 border-gray-300 bg-white h-8"
                onChange={(e) => {
                  if (
                    e.target.value === "Baixa" ||
                    e.target.value === "Média" ||
                    e.target.value === "Alta"
                  )
                    task.priority = e.target.value;
                  setTask(task);
                }}
              >
                <option value={"Baixa"} selected={task.priority === "Baixa"}>
                  Baixa
                </option>
                <option value={"Média"} selected={task.priority === "Média"}>
                  Média
                </option>
                <option value={"Alta"} selected={task.priority === "Alta"}>
                  Alta
                </option>
              </select>
            </div>
          </div>

          <div>
            <button
              className="mt-5 py-2 px-4 bg-green-500 text-white font-semibold rounded shadow-lg hover:bg-green-700 hover:shadow-sm hover:text-opacity-75 transition duration-300 ease-in-out mr-5"
              type="button"
              onClick={handleSubmitSave}
              disabled={loading}
            >
              Adicionar
            </button>
            <button
              className="mt-5 py-2 px-4 bg-blue-500 text-white font-semibold rounded shadow-lg hover:bg-blue-700 hover:shadow-sm hover:text-opacity-75 transition duration-300 ease-in-out mr-5"
              type="button"
              onClick={() => router.replace("/task")}
              disabled={loading}
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
