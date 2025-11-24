import React from 'react'
import tecnologias from '@/app/data/tecnologias.json';
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <h2>Tecnologias Exploradas</h2>
      <ul>
        {tecnologias.map((tecnologia, i) => {
          return <li className="list-none">
            <h2>
              {tecnologia.title}
            </h2>
            <Image
              src={`/tecnologias/${tecnologia.image}`}
              alt={tecnologia.title}
              width={200}
              height={200}
            />
            <p>
              {tecnologia.description} 
            </p>
            <p>
              Rating: {tecnologia.rating}
            </p>
          </li>
          })}
      </ul>
    </div>
  )
}

