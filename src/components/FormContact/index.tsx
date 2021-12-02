import SectionTitle from "../SectionTitle";
import Form from "./Form";
import { Container } from "./styles"


function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br/>
            meus serviços?
          </>
        }

        description={
          <>
            Preencha o formulário abaixo
            <br/>
            irei retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  )
}

export default FormContact;