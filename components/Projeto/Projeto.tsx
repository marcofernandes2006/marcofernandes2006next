interface ProjetoProps {
  nome: string;
  url: string;
}

export default function Projeto({nome, url}: ProjetoProps ) {
  return (
    <p>
      O projeto <strong>{nome}</strong> pode ser visto aqui:{' '}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>.
    </p>
  );
}