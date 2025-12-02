"use client";

import { useState } from "react";

type Tarefa = {
  id: number;
  texto: string;
  editando: boolean;
};

const TECNOLOGIAS = ["React", "Next.js", "Java", "Kotlin", "TypeScript"];

export default function InputPage() {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState(TECNOLOGIAS[0]);

  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adicionarTarefa = () => {
    if (!novaTarefa.trim()) return;
    setTarefas((prev) => [
      ...prev,
      { id: Date.now(), texto: novaTarefa.trim(), editando: false },
    ]);
    setNovaTarefa("");
  };

  const apagarTarefa = (id: number) => {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  };

  const ativarEdicao = (id: number) => {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, editando: true } : t
      )
    );
  };

  const alterarTextoTarefa = (id: number, novoTexto: string) => {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, texto: novoTexto } : t
      )
    );
  };

  const guardarEdicao = (id: number) => {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, editando: false } : t
      )
    );
  };

  const cancelarEdicao = (id: number) => {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, editando: false } : t
      )
    );
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-2">Página Input</h1>

      {/* Input de texto */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Texto</h2>
        <input
          type="text"
          className="border rounded px-3 py-1 w-full"
          placeholder="Escreva algo..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <p className="mt-2">
          Texto digitado: <span className="font-semibold">{texto}</span>
        </p>
      </section>

      {/* Seletor de tecnologias / categorias */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Tecnologia / Categoria</h2>
        <select
          className="border rounded px-3 py-1"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {TECNOLOGIAS.map((tec) => (
            <option key={tec} value={tec}>
              {tec}
            </option>
          ))}
        </select>
        <p className="mt-2">
          Categoria selecionada: <span className="font-semibold">{categoria}</span>
        </p>
      </section>

      {/* Lista de tarefas */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Tarefas</h2>

        <div className="flex gap-2">
          <input
            type="text"
            className="border rounded px-3 py-1 flex-1"
            placeholder="Nova tarefa..."
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <button
            className="px-3 py-1 border rounded"
            onClick={adicionarTarefa}
          >
            Adicionar
          </button>
        </div>

        <ul className="list-disc ml-5 space-y-2">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="flex items-center gap-2">
              {tarefa.editando ? (
                <>
                  <input
                    type="text"
                    className="border rounded px-2 py-1 flex-1"
                    value={tarefa.texto}
                    onChange={(e) =>
                      alterarTextoTarefa(tarefa.id, e.target.value)
                    }
                  />
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => guardarEdicao(tarefa.id)}
                  >
                    Guardar
                  </button>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => cancelarEdicao(tarefa.id)}
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <span className="flex-1">{tarefa.texto}</span>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => ativarEdicao(tarefa.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => apagarTarefa(tarefa.id)}
                  >
                    Apagar
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
