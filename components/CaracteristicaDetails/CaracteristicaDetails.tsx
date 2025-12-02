import React from 'react'
import Link from 'next/link';

interface CaracteristicaProps {
  caracteristica: string;
}

export default function Caracteristica({caracteristica}: CaracteristicaProps) {
  return (
    <div>
        <p>{caracteristica}</p>
        <Link href={"/caracteristicas"} className='bg-gray-300 p-3 m-3 rounded-2xl'>Voltar</Link>
    </div>
  )
}
