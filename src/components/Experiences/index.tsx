import SectionTitle from "../SectionTitle";
import ExperienceItem from "./ExperienceItem";
import { Container } from "./styles";

function Experiences() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut."
        />
      </section>
    </Container>
  )
}

export default Experiences;