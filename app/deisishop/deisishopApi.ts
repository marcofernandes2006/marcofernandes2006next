// app/deisishop/deisishopApi.ts
export const API_BASE = "https://deisishop.pythonanywhere.com";

export type Produto = {
  id: number;
  nome: string;
  descricao?: string;
  preco?: number;
  imagem_url?: string;   // ajusta o nome conforme a API
  categoria_id: number;  // ajusta conforme a API
};

export type Categoria = {
  id: number;
  nome: string;
  logo_url?: string;     // ajusta o nome conforme a API
};

export async function fetchProdutos(): Promise<Produto[]> {
  const res = await fetch(`${API_BASE}/produtos/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Erro ao carregar produtos");
  return res.json();
}

export async function fetchProduto(id: string | number): Promise<Produto> {
  const res = await fetch(`${API_BASE}/produtos/${id}/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Produto não encontrado");
  return res.json();
}

export async function deleteProduto(id: string | number): Promise<void> {
  const res = await fetch(`${API_BASE}/produtos/${id}/`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Erro ao remover produto");
}

export async function fetchCategorias(): Promise<Categoria[]> {
  const res = await fetch(`${API_BASE}/categorias/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Erro ao carregar categorias");
  return res.json();
}
