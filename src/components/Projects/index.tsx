import Link from 'next/link';
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { Container } from "./styles";

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projects({ projetos }: ProjetosProps) {
  console.log(projetos)
  
  return (
    <Container>
      <SectionTitle title="Últimos Projetos"/>

      <section>
        {projetos.slice(0,3).map( projeto => (
          <ProjectItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}        
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>
            Ver todos os projetos
          </a>
        </Link>
      </button>
    </Container>
  )
}

export default Projects;