import Team from "../components/Team";
import styled from "styled-components";

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const TeamPage = () => {
  return (
    <PageContainer>
      <Team />
    </PageContainer>
  );
};

export default TeamPage;
