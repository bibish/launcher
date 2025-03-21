import Features from "../components/Features";
import styled from "styled-components";

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const FeaturesPage = () => {
  return (
    <PageContainer>
      <Features />
    </PageContainer>
  );
};

export default FeaturesPage;
