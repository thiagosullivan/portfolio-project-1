import Link from 'next/link';

import { Container } from './styles';

interface ProjectCardItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjectCardItem({ title, type, imgUrl, slug }: ProjectCardItemProps){
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  )
};

export default ProjectCardItem