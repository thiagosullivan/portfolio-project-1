import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import Prismic from '@prismicio/client';

import { HomeContainer } from '../styles/HomeStyles';
import { getPrismicClient } from '../services/prismic';
import { GetStaticProps } from "next";

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projetos={projetos} />
        <Knowledge />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>

  );
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
  
  console.log(projetos)

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };

};