"use client"

import TecnologiaDetailsCard from "@/components/TecnologiaDetailsCard/TecnologiaDetailsCard";
import tecnologias from '@/app/data/tecnologias.json';
import { useParams } from 'next/navigation';

export default function TecnologiaPage() { 
  const params = useParams()
  const i = Number(params.tecnologia)
  
  const tecnologia = tecnologias.at(i)
    if(tecnologia != null) {
      return (
        <TecnologiaDetailsCard
          title={tecnologia.title}
          image={tecnologia.image}
          description={tecnologia.description}
          rating={tecnologia.rating}
        />
       );  
    }
}