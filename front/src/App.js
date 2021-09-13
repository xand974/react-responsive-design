import Feature from "components/Feature";
import Intro from "components/Intro";
import Navbar from "components/Navbar";
import Service from "components/Service";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const IntoShape = css`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Shape = styled.div`
  ${IntoShape}
  background: #0d3f66;
  clip-path: polygon(78% 0, 100% 0, 100% 100%, 56% 100%);
`;

const FeatureShape = styled.div`
  ${IntoShape}
  background: #ffa8b8;
  clip-path: polygon(0 0, 56% 0%, 100% 100%, 56% 100%);
`;
const ServiceShape = styled.div`
  background: #002d3d;
  clip-path: polygon(0 0, 40% 0, 40% 100%, 0% 100%);
  ${IntoShape}
`;
const App = () => {
  return (
    <>
      <Container>
        <Shape />
        <Navbar />
        <Intro />
      </Container>
      <Container>
        <FeatureShape />
        <Feature />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
    </>
  );
};

export default App;
