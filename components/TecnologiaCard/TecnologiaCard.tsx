import React from 'react'
import Image from 'next/image';

interface TecnologiaProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaCard({title, image, description, rating}: TecnologiaProps) {
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
    </>
  )
}
