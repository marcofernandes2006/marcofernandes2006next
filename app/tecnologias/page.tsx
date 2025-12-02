import tecnologias from '@/app/data/tecnologias.json';
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard';


export default function tecnologiasPage() {
  return (
    <div>
      <h2>Tecnologias Exploradas</h2>
      <ul>
        {tecnologias.map((tecnologia, i) => {
          return<TecnologiaCard 
            title={tecnologia.title} 
            image={tecnologia.image}
            id={i}
          />
        })}
      </ul>
    </div>
  )
}

