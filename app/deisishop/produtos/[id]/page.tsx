// app/deisishop/produtos/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProduto, fetchProduto, Produto } from "../../deisishopApi";

type Props = {
  params: { id: string };
};

export default function ProdutoDetalhePage({ params }: Props) {
  const { id } = params;
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [removendo, setRemovendo] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const p = await fetchProduto(id);
        setProduto(p);
      } catch (e) {
        setErro("Erro ao carregar produto");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleRemover = async () => {
    if (!confirm("Tem a certeza que pretende remover este produto?")) return;
    try {
      setRemovendo(true);
      await deleteProduto(id);
      router.push("/deisishop/produtos");
    } catch (e) {
      alert("Erro ao remover produto.");
      setRemovendo(false);
    }
  };

  if (loading) return <div className="p-6">A carregar...</div>;
  if (erro || !produto) return <div className="p-6">{erro ?? "Produto não encontrado"}</div>;

  return (
    <div className="p-6 space-y-4">
      <button
        onClick={() => router.back()}
        className="text-sm underline text-blue-600"
      >
        Voltar
      </button>

      <div className="border rounded p-4 space-y-3 max-w-xl">
        {produto.imagem_url && (
          <img
            src={produto.imagem_url}
            alt={produto.nome}
            className="w-full h-60 object-cover rounded"
          />
        )}

        <h1 className="text-2xl font-bold">{produto.nome}</h1>

        {produto.descricao && <p>{produto.descricao}</p>}

        {produto.preco != null && (
          <p className="font-bold text-lg">
            {produto.preco.toFixed(2)} €
          </p>
        )}

        <button
          onClick={handleRemover}
          disabled={removendo}
          className="px-4 py-2 rounded bg-red-600 text-white disabled:opacity-60"
        >
          {removendo ? "A remover..." : "Remover produto"}
        </button>
      </div>
    </div>
  );
}
