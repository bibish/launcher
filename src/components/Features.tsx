import styled from "styled-components";
import { motion } from "framer-motion";

const FeaturesSection = styled.section`
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

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
  border-radius: 5px;
  padding: 30px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  background-color: var(--background-color);
  border: 2px solid var(--secondary-color);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--secondary-color);
  box-shadow: 0 0 15px var(--secondary-color);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-family: var(--font-retro);
  color: var(--secondary-color);
  margin-bottom: 15px;
  text-align: center;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
  text-align: center;
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: "Neural Processing",
      description:
        "Advanced neural networks process data with lightning speed, enabling ALLTHINGS to understand and respond to complex queries with remarkable precision.",
      icon: "🧠",
    },
    {
      id: 2,
      title: "Allphins Dev Leverage",
      description:
        "Harness the power of accelerated development with our specialized AI tools for the reinsurance sector, improving efficiency and reducing time-to-market.",
      icon: "🚀",
    },
    {
      id: 3,
      title: "Comprehensive Data Control",
      description:
        "Take complete control of your data with our advanced management systems, offering security, compliance, and flexibility in an ever-evolving reinsurance environment.",
      icon: "🔍",
    },
    {
      id: 4,
      title: "Risk Prediction Engine",
      description:
        "Our risk prediction engine uses artificial intelligence to analyze trends and anticipate potential scenarios, providing strategic advantages to reinsurers.",
      icon: "📊",
    },
    {
      id: 5,
      title: "Automated Underwriting",
      description:
        "Transform your underwriting process through intelligent automation that accurately assesses risks, improving efficiency and reducing human error.",
      icon: "⚙️",
    },
    {
      id: 6,
      title: "And More...",
      description:
        "Discover additional cutting-edge features including real-time analytics, claims processing intelligence, market cycle prediction, and custom solutions for your specific reinsurance needs.",
      icon: "✨",
    },
  ];

  return (
    <FeaturesSection id="features">
      <div className="container">
        <SectionTitle className="glitch" data-text="FEATURES">
          FEATURES
        </SectionTitle>

        <FeaturesContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} variants={itemVariants}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesContainer>
      </div>
    </FeaturesSection>
  );
};

export default Features;
