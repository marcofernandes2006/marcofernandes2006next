import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ProdutoProps {
  id: number;
  title: string;
  preco: number;
  image: string;
  link: string;
  addProduto: ()=>void;
}

export default function ProdutosCard({id, title, preco, image, link, addProduto}: ProdutoProps) {
  return (
    <li key={id} className="list-none bg-gray-300 p-3 m-3 rounded-2xl h-[280px] w-[310px] flex flex-wrap">
      <div>
        <h2>{title}</h2>
        <Image src={image} alt={title} width={150} height={150}/>
        <h3>Preço: {preco}€</h3>
      </div>
      <div className='flex'>
        <Link href={`/${link}/${id}`} className='bg-gray-400 p-3 m-3 rounded-2xl'>+info</Link>
        <button
        className='bg-gray-400 p-3 m-3 rounded-2xl'
        onClick={addProduto}
        > 
          Adicionar ao Carrinho
        </button>
      </div>
    </li>
  )
}
