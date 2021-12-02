import Link from 'next/link';
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { Container } from "./styles";

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos"/>

      <section>
        <ProjectItem
          img="https://www.ayrtonsenna.com.br/wp-content/uploads/2016/12/brasil-90.jpg"
          title="Projeto 01"
          type="Website"
          slug="test"
        />
        <ProjectItem
          img="https://www.ayrtonsenna.com.br/wp-content/uploads/2016/12/brasil-90.jpg"
          title="Projeto 01"
          type="Website"
          slug="test"
        />
        <ProjectItem
          img="https://www.ayrtonsenna.com.br/wp-content/uploads/2016/12/brasil-90.jpg"
          title="Projeto 01"
          type="Website"
          slug="test"
        />
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