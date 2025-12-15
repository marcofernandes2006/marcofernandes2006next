'use client'
import useSWR from 'swr';
import {Produto} from '@/models/interfaces'
import ProdutosCard from '@/components/ProdutosCard/ProdutosCard';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface CategoriaProps {
  title: string;
}

export default function ProdutosCategoriaCard({title}: CategoriaProps) {

  const {data, error, isLoading} = useSWR<Produto[]>('https://deisishop.pythonanywhere.com/products/', fetcher);

  if (error) return <p>Erro ao carregar</p>;

  if (isLoading) return <p>Carregando...</p>;

  if (!data) return <p>Nenhum produto encontrado</p>;

  return (
    <>
        <h1>{title}</h1>
        <ul>
            {data.map(produto => {
                if (produto.category === title) {
                  return <ProdutosCard
                      id={produto.id}
                      title={produto.title}
                      preco={produto.price}
                      image={produto.image}
                      link={`deisishop/categorias/${title}`}
                  />
                }
            })}
        </ul>
    </>
  )
}
