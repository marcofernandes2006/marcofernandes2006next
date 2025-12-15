import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ProdutoProps {
  title: string;
  price: number;
  description: string;
  image: string;
  rate: number;
  count: number;
  link: string;
}

export default function ProdutosDetailCard({title, price, description, image, rate, count, link}: ProdutoProps) {
  return (
    <>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={250} height={250}/>
        <p>{description}</p>
        <h2>{price}€</h2>
        <p>Rate: {rate}</p>
        <p>Rating count: {count}</p>
        <Link href={`/${link}`} className='bg-gray-300 p-3 m-3 rounded-2xl'>Voltar</Link>
    </>
  )
}
