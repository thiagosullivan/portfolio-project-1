import Header from '../../components/Header';
import ProjectCardItem from '../../components/ProjectCardItem';
import { ProjectsContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectCardItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://www.ayrtonsenna.com.br/wp-content/uploads/2016/12/brasil-90.jpg"
        />
        <ProjectCardItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://www.ayrtonsenna.com.br/wp-content/uploads/2016/12/brasil-90.jpg"
        />
        <ProjectCardItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://www.ayrtonsenna.com.br/wp-content/uploads/2016/12/brasil-90.jpg"
        />
        <ProjectCardItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://www.ayrtonsenna.com.br/wp-content/uploads/2016/12/brasil-90.jpg"
        />
      </main>
    </ProjectsContainer>
  )
}