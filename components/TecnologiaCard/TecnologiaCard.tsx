import React from 'react'
import Image from 'next/image';
import ContadorPersonalizado from '../ContadorPersonalizado/ContadorPersonalizado';
import Link from 'next/link';

interface TecnologiaProps {
  title: string;
  image: string;
  id: number;
}

export default function TecnologiaCard({title, image, id}: TecnologiaProps) {
  return (
    <>
      <li className="list-none bg-gray-300 p-3 m-3 rounded-2xl">
        <Link href={`tecnologias/${id}`} key={id}>
            <h2>
              {title}
            </h2>
            <Image
              src={`/tecnologias/${image}`}
              alt={title}
             width={200}
              height={200}
            />
        </Link>
        <ContadorPersonalizado title={title} />
      </li>
    </>
  )
}
