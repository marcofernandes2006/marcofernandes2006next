import React from 'react'

interface CaracteristicaProps {
  caracteristica: string;
}

export default function Caracteristica({caracteristica}: CaracteristicaProps) {
  return (
    <div>{caracteristica}</div>
  )
}
