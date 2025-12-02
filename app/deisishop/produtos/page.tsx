// app/deisishop/produtos/page.tsx
import Link from "next/link";
import { fetchProdutos } from "../deisishopApi";

export const dynamic = "force-dynamic";

export default async function ProdutosPage() {
  const produtos = await fetchProdutos();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">DEISIshop – Produtos</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {produtos.map((p) => (
          <div key={p.id} className="border rounded p-3 space-y-2">
            {p.imagem_url && (
              <img
                src={p.imagem_url}
                alt={p.nome}
                className="w-full h-40 object-cover rounded"
              />
            )}
            <h2 className="font-semibold text-lg">{p.nome}</h2>
            {p.preco != null && (
              <p className="font-bold">{p.preco.toFixed(2)} €</p>
            )}
            <Link
              href={`/deisishop/produtos/${p.id}`}
              className="text-blue-600 underline text-sm"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
