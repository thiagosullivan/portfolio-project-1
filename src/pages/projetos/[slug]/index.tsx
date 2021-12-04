import Head from 'next/head';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import Prismic from '@prismicio/client';
import Loadingscreen from '../../../components/LoadingScreen';

import { ProjetoPage } from '../../../styles/ProjetoPage';
import { ProjectsContainer } from '../../../styles/ProjetosStyles';
import { getPrismicClient } from '../../../services/prismic';
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {

  const router = useRouter();
  
  if(router.isFallback) {
    return <Loadingscreen />
  }
  return (
    <ProjetoPage>

      <Head>
        <title>{projeto.title} | Meu Portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta
          property="og:description"
          content={projeto.description}
        />
      </Head>

      <Header />
      <BannerProject
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjetoPage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'pro')
  ]);

  const paths = projetos.results.map( projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  }
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projeto', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.type,
    description: response.data.description,
    link: response.data.link,
    thumbnail: response.data.thumbnail.url
  }

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };

};