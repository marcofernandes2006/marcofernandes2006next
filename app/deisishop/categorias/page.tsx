"use client"

import useSWR from 'swr';
import {Categoria} from '@/models/interfaces'
import Link from 'next/link';
import CategoriasCard from '@/components/CategoriasCard/CategoriasCard';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function page() {

  const {data, error, isLoading} = useSWR<Categoria[]>('https://deisishop.pythonanywhere.com/categories/', fetcher);

  if (error) return <p>Erro ao carregar</p>;

  if (isLoading) return <p>Carregando...</p>;

  if (!data) return <p>Nenhum produto encontrado</p>;

  return (
    <>
        {data.map((categoria, i) => {
            return <CategoriasCard 
            id={i}
            title={categoria.name}
            logo=''
            />
        })}
        <Link href={"/deisishop"} className='bg-gray-300 p-3 m-3 rounded-2xl'>Voltar</Link>
    </>
  )
}
