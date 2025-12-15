'use client'
import useSWR from 'swr';
import {Produto} from '@/models/interfaces'
import { useParams } from 'next/navigation';
import ProdutosDetailCard from '@/components/ProdutosDetailCard/ProdutosDetailCard';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function produtosPage() {

  const params = useParams()
  const i = Number(params.produto)

  const {data, error, isLoading} = useSWR<Produto>(`https://deisishop.pythonanywhere.com/products/${i}`, fetcher);

  if (error) return <p>Erro ao carregar</p>;

  if (isLoading) return <p>Carregando...</p>;

  if (!data) return <p>Nenhum produto encontrado</p>;

  return (
    <>
      <ProdutosDetailCard 
        title={data.title}
        price={data.price}
        description={data.description}
        image={data.image}
        rate={data.rating.rate}
        count={data.rating.count}
        link='deisishop'
      />
    </>
  )
}
