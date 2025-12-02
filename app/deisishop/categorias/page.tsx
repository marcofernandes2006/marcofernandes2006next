// app/deisishop/categorias/page.tsx
import Link from "next/link";
import { fetchCategorias } from "../deisishopApi";

export const dynamic = "force-dynamic";

export default async function CategoriasPage() {
  const categorias = await fetchCategorias();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Categorias DEISIshop</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {categorias.map((c) => (
          <Link
            key={c.id}
            href={`/deisishop/categorias/${c.id}`}
            className="border rounded p-3 flex flex-col items-center space-y-2 hover:bg-gray-50"
          >
            {c.logo_url && (
              <img
                src={c.logo_url}
                alt={c.nome}
                className="w-20 h-20 object-contain"
              />
            )}
            <span className="font-semibold">{c.nome}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
