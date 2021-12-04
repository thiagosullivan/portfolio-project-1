import Header from '../../components/Header';
import ProjectCardItem from '../../components/ProjectCardItem';
import Prismic from '@prismicio/client';

import { ProjectsContainer } from '../../styles/ProjetosStyles';
import { getPrismicClient } from '../../services/prismic';
import { GetStaticProps } from "next";

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

export default function Projetos({ projetos }: ProjetosProps ) {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        {projetos.map( projeto => (
          <ProjectCardItem
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}        
      </main>
    </ProjectsContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]'}
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.type,
    description: projeto.data.description,
    link: projeto.data.link,
    thumbnail: projeto.data.thumbnail.url,
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };

};