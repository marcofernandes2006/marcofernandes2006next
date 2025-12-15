'use client'
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import ProdutosCategoriaCard from '@/components/ProdutosCategoriaCard/ProdutosCategoriaCard';
import Link from 'next/link';

export default function page() {
  const params = useParams()
  const i = String(params.categoria)

  return ( <>
    <ProdutosCategoriaCard 
        title={i}
    />
    <Link href={`/deisishop/categorias`} className='bg-gray-300 p-3 m-3 rounded-2xl'>Voltar</Link>
  </>
    
  )
}
