import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ProdutoProps {
  id: number;
  title: string;
  preco: number;
  removeProduto: ()=>void;
}

export default function ProdutosCartCard({id, title, preco, removeProduto}: ProdutoProps) {
  return (
    <li key={id} className="list-none bg-gray-400 p-3 m-3 rounded-2xl h-[75px] w-[600px] flex flex-wrap justify-between">
        <p>{title} - {preco}€</p>
        <button
            className='bg-gray-500 text-gray-50 rounded-2xl'
            onClick={removeProduto}
        >
            Remover
        </button>
    </li>
  )
}