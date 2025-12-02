"use client"

import React from 'react'
import { useParams } from 'next/navigation';
import CaracteristicaDetails from '@/components/CaracteristicaDetails/CaracteristicaDetails'

const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ]

export default function CaracteristicaCage() {
    const params = useParams()
    const i = Number(params.tecnologia)
    
    const caracteristica = String(caracteristicas.at(i))
    if(caracteristica != null) {
        return (
            <CaracteristicaDetails
                caracteristica={caracteristica}
            />
           );  
            }
    }
