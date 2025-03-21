import About from "../components/About";
import styled from "styled-components";

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <About />
    </PageContainer>
  );
};

export default AboutPage;
