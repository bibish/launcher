import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 50px;
  padding: 30px 0;
  position: relative;
  z-index: 100;
  border-top: 2px solid var(--secondary-color);
  box-shadow: 0 -5px 20px rgba(0, 255, 255, 0.3);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-family: var(--font-retro);
  font-size: 1rem;
  color: var(--text-color);
`;

const TeamInfo = styled.div`
  font-family: var(--font-retro);
  font-size: 1rem;
  color: var(--text-color);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <Copyright>
            &copy; {new Date().getFullYear()} ALLTHINGS. All rights reserved.
          </Copyright>
          <TeamInfo>
            <p>Created by Thibault, Leoul, and Ambroise</p>
          </TeamInfo>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;
