import { Container, SpinnerContainer } from './styles';

function Loadingscreen() {
  return (
    <Container>
      <SpinnerContainer>
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
      </SpinnerContainer>
    </Container>
  )
}

export default Loadingscreen;