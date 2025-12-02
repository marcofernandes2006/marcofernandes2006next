import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface TecnologiaProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaDetailsCard({title, image, description, rating}: TecnologiaProps) {
  return (
      <>
        <h2>
          {title}
        </h2>
        <Image
          src={`/tecnologias/${image}`}
          alt={title}
          width={200}
          height={200}
        />
        <p>
          {description} 
        </p>
        <p>
          Rating: {rating}
        </p>
        <Link href={"/tecnologias"} className='bg-gray-300 p-3 m-3 rounded-2xl'>Voltar</Link>
      </>
    )
}
