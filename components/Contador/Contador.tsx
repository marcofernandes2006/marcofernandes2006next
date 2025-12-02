"use client";
import { useEffect, useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);
  const [historico, setHistorico] = useState<number[]>([]);

  useEffect(() => {
    const v = localStorage.getItem("contador_valor");
    const h = localStorage.getItem("contador_historico");

    if (v !== null) setValor(Number(v));
    if (h !== null) setHistorico(JSON.parse(h));
  }, []);

  useEffect(() => {
    localStorage.setItem("contador_valor", String(valor));
    localStorage.setItem("contador_historico", JSON.stringify(historico));
  }, [valor, historico]);

  const alterarValor = (novo: number) => {
    if (novo < 0) novo = 0;
    if (novo > 10) novo = 10;

    setValor(novo);
    setHistorico((prev) => [...prev, novo]);
  };

  const incrementar = () => alterarValor(valor + 1);
  const decrementar = () => alterarValor(valor - 1);
  const reset = () => alterarValor(0);

  const obterCor = () => {
    if (valor >= 0 && valor <= 3) return "text-red-500";
    if (valor >= 4 && valor <= 7) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="p-4 border rounded max-w-sm">
      <h2 className="text-lg font-bold mb-2">Contador</h2>

      <div className={`text-4xl font-bold mb-4 ${obterCor()}`}>
        {valor}
      </div>

      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={decrementar}>
          -
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={reset}>
          Reset
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={incrementar}>
          +
        </button>
      </div>

      <h3 className="font-semibold">Histórico:</h3>
      <ul className="list-disc ml-5">
        {historico.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
