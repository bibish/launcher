import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  padding: 80px 0;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: var(--font-pixel);
  color: var(--primary-color);
  text-shadow: var(--glow-shadow);
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutText = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--secondary-color);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 40px;

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const HighlightBox = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HighlightItem = styled(motion.div)`
  flex: 1;
  min-width: 200px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;

const HighlightValue = styled.div`
  font-size: 2.5rem;
  font-family: var(--font-pixel);
  color: var(--primary-color);
  margin-bottom: 10px;
`;

const HighlightLabel = styled.div`
  font-size: 0.9rem;
  font-family: var(--font-retro);
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <SectionTitle className="glitch" data-text="ABOUT ALLTHINGS">
          ABOUT ALLTHINGS
        </SectionTitle>

        <ContentWrapper>
          <AboutText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              ALLTHINGS est une technologie d'IA agentique de pointe intégrée au
              cœur d'Allphins, conçue pour révolutionner le secteur de la
              réassurance. En combinant des algorithmes sophistiqués, une
              analyse de données avancée et une interface rétro distinctive,
              ALLTHINGS propulse Allphins au rang de leader technologique sur le
              marché de la réassurance.
            </p>
            <p>
              Grâce à ses capacités de traitement neural, sa maîtrise du
              développement rapide et son moteur de prédiction des risques,
              ALLTHINGS offre aux professionnels de la réassurance des outils
              d'analyse sans précédent et une automatisation intelligente qui
              redéfinissent les standards de l'industrie.
            </p>
          </AboutText>

          <HighlightBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <HighlightItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <HighlightValue>2025</HighlightValue>
              <HighlightLabel>Founded</HighlightLabel>
            </HighlightItem>

            <HighlightItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <HighlightValue>3</HighlightValue>
              <HighlightLabel>Team Members</HighlightLabel>
            </HighlightItem>

            <HighlightItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <HighlightValue>∞</HighlightValue>
              <HighlightLabel>Possibilities</HighlightLabel>
            </HighlightItem>
          </HighlightBox>
        </ContentWrapper>
      </div>
    </AboutSection>
  );
};

export default About;
