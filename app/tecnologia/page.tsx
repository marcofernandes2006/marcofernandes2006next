import Link from "next/link";
import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";
import tecnologias from '@/app/data/tecnologias.json';


interface TecnologiaProps {
  id: number
}

export default function Tecnologia({id}: TecnologiaProps) { 
    const tecnologia = tecnologias.at(id)
    if(tecnologia != null) {
      return (
        <Link href={`/tecnologia`}>
          <TecnologiaCard
            title={tecnologia.title}
            image={tecnologia.image}
            description={tecnologia.description}
            rating={tecnologia.rating}
          />
        </Link>
       );  
    }

    return (
        <div>
            Hell No
        </div>
    )
}