import tecnologias from '@/app/data/tecnologias.json';
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard';
import Tecnologia from '../tecnologia/page';
import Link from "next/link";

export default function tecnologiasPage() {
  return (
    <div>
      <h2>Tecnologias Exploradas</h2>
      <ul>
        {tecnologias.map((tecnologia, i) => {
          return <Link href={`/tecnologia`}>
            <li className="list-none bg-gray-300 p-3 m-3 rounded-2xl" key={i}>
              <TecnologiaCard 
                title={tecnologia.title} 
                image={tecnologia.image}
                description={tecnologia.description}
                rating={tecnologia.rating}
              />
              <Tecnologia id={i}/>
            </li>
          </Link>
        })}
      </ul>
    </div>
  )
}

