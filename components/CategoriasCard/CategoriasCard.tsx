import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface CategoriaProps {
  id: number;
  title: string;
  logo: string;
}

export default function CategoriasCard({id, title, logo}: CategoriaProps) {
  return (
    <li key={id} className="list-none bg-gray-300 p-3 m-3 rounded-2xl">
        <Link href={`/deisishop/categorias/${title}`}>
            <div className='flex'>
              <Image src={logo} alt={title} width={25} height={25}/>
              <h2>{title}</h2>
            </div>
        </Link>
    </li>
  )
}
