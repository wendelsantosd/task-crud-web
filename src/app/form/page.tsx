"use client";

import { formatDate } from "@/helpers/format/date";
import { ITask } from "@/services/api/task/protocols/getTasks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Form() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [formData, setFormData] = useState<ITask>({
    completionDate: formatDate(tomorrow.toISOString(), "yyyy-MM-dd"),
    priority: "Média",
  } as ITask);
  const [fieldsWithError, setFieldsWithError] = useState<string[]>([]);
  const router = useRouter();

  const isValidData = () => {
    let isValidTitle = false;
    let isValidDescription = false;

    if (formData.title && formData.title !== "") {
      const _fieldsWithError = fieldsWithError.filter(
        (item) => item !== "title"
      );
      setFieldsWithError(_fieldsWithError);
      isValidTitle = true;
    } else {
      if (!fieldsWithError.includes("title")) {
        fieldsWithError.push("title");
        setFieldsWithError([...fieldsWithError]);
      }
      isValidTitle = false;
    }

    if (formData.description && formData.description !== "") {
      const _fieldsWithError = fieldsWithError.filter(
        (item) => item !== "description"
      );
      setFieldsWithError(_fieldsWithError);
      isValidTitle = true;
    } else {
      if (!fieldsWithError.includes("description")) {
        fieldsWithError.push("description");
        setFieldsWithError([...fieldsWithError]);
      }
      isValidTitle = false;
    }

    return isValidTitle && isValidDescription;
  };

  const handleSubmit = () => {
    if (!isValidData()) return;
  };

  return (
    <div className="flex flex-col items-center bg-slate-50 h-screen w-full">
      <div className="mt-20 py-4 px-4 bg-white w-4/12 rounded shadow-sm">
        <div className="flex justify-between mb-5">
          <p className="text-xl font-semibold text-gray-700">Criar Tarefa</p>
          <button
            className="flex items-center justify-center bg-red-600 w-10 shadow rounded hover:bg-red-700 hover:shadow-sm transaction duration-300 ease-in-out"
            onClick={() => {
              console.log(formData);
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
              onChange={(e) => {
                formData.title = e.target.value;
                setFormData(formData);
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
              onChange={(e) => {
                formData.description = e.target.value;
                setFormData(formData);
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
                onChange={(e) => {
                  formData.completionDate = e.target.value;
                  setFormData(formData);
                }}
                type="date"
                defaultValue={formData.completionDate}
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
                    formData.priority = e.target.value;
                  setFormData(formData);
                }}
                defaultValue={formData.priority}
              >
                <option value={"Baixa"}>Baixa</option>
                <option value={"Média"}>Média</option>
                <option value={"Alta"}>Alta</option>
              </select>
            </div>
          </div>

          <div>
            <button
              className="mt-5 py-2 px-4 bg-green-500 text-white font-semibold rounded shadow-lg hover:bg-green-700 hover:shadow-sm hover:text-opacity-75 transition duration-300 ease-in-out mr-5"
              type="button"
              onClick={handleSubmit}
            >
              Adicionar
            </button>
            <button
              className="mt-5 py-2 px-4 bg-blue-500 text-white font-semibold rounded shadow-lg hover:bg-blue-700 hover:shadow-sm hover:text-opacity-75 transition duration-300 ease-in-out mr-5"
              type="button"
              onClick={() => router.replace("/task")}
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
