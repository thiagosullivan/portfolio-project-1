import Link from 'next/link';

import { ProjectContainer } from './styles';
import { AiOutlineRightCircle } from 'react-icons/ai';

interface ProjectProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, type, slug, img }:ProjectProps){
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-left">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
        <a>Ver Mais <AiOutlineRightCircle /></a>
        </Link>
      </button>
    </ProjectContainer>
  )
}