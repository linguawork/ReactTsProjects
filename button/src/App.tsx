import Button from "./components/button"; 
import styled from "styled-components";

const Container = styled.div`
min-height: 100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Button />
    </Container>
  );
}

export default App;
