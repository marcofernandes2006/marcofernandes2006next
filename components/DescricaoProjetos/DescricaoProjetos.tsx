import Projeto from '@/components/Projeto/Projeto'

export default function DescricaoProjetos() {
  return (
    <div>
      <h2>Projetos Desenvolvidos</h2>

      <p className="text-gray-700 mb-4">
        Ao longo da disciplina, desenvolvi vários projetos que aplicam diferentes
        tecnologias aprendidas. Pode consultar todos estes projetos na minha
        página do GitHub Pages.
      </p>

      <a
        href="https://marcofernandes2006.github.io"
        target="_blank"
        className="text-blue-600 font-semibold underline"
      >
        Ver projetos no GitHub Pages
      </a>
      <Projeto 
      nome="Loja" 
      url="https://marcofernandes2006.github.io/lab7"/>
    </div>
  );
}