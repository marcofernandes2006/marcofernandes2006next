// app/deisishop/categorias/[id]/page.tsx
import Link from "next/link";
import { fetchCategorias, fetchProdutos, Produto } from "../../deisishopApi";

type Props = {
  params: { id: string };
};

export const dynamic = "force-dynamic";

export default async function CategoriaDetalhePage({ params }: Props) {
  const categoriaId = Number(params.id);

  const [categorias, produtos] = await Promise.all([
    fetchCategorias(),
    fetchProdutos(),
  ]);

  const categoria = categorias.find((c) => c.id === categoriaId);
  const produtosCategoria: Produto[] = produtos.filter(
    (p) => p.categoria_id === categoriaId
  );

  return (
    <div className="p-6 space-y-4">
      <Link href="/deisishop/categorias" className="text-sm underline text-blue-600">
        Voltar às categorias
      </Link>

      <h1 className="text-2xl font-bold">
        Produtos da categoria: {categoria?.nome ?? categoriaId}
      </h1>

      {produtosCategoria.length === 0 && <p>Sem produtos nesta categoria.</p>}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {produtosCategoria.map((p) => (
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
