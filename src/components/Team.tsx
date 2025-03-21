import styled from "styled-components";
import { motion } from "framer-motion";

const TeamSection = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: var(--font-pixel);
  color: var(--primary-color);
  text-shadow: var(--glow-shadow);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TeamCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--secondary-color);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  border-radius: 5px;
  padding: 30px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  }
`;

const RobotFace = styled(motion.div)`
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 10px;
  background-color: var(--background-color);
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 15px var(--primary-color);
  position: relative;
  overflow: hidden;
`;

const RobotHead = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RobotEyes = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

const RobotEye = styled(motion.div)`
  width: 25px;
  height: 12px;
  background-color: var(--primary-color);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--primary-color);
`;

const RobotMouth = styled(motion.div)`
  width: 50px;
  height: 8px;
  background-color: var(--primary-color);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--primary-color);
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-family: var(--font-retro);
  color: var(--primary-color);
  margin-bottom: 10px;
`;

const MemberRole = styled.div`
  font-size: 1rem;
  font-family: var(--font-retro);
  color: var(--secondary-color);
  margin-bottom: 15px;
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 20px;
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const eyeBlinkVariants = {
  open: { height: 12, y: 0 },
  blink: { height: 1, y: 5 },
};

const mouthVariants = {
  speak: {
    width: [50, 30, 60, 40, 50],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Thibault",
      role: "Algorithms & Data Analysis",
      bio: "Thibault excels in designing sophisticated algorithms and data analysis, bringing analytical depth to the core of ALLTHINGS.",
      initial: "T",
    },
    {
      id: 2,
      name: "Leoul",
      role: "Infrastructure & Systems",
      bio: "Leoul is the master of infrastructure, ensuring robustness and optimal performance of the systems that power ALLTHINGS.",
      initial: "L",
    },
    {
      id: 3,
      name: "Ambroise",
      role: "Software Development & Genius Solutions",
      bio: "Ambroise combines software development expertise with boundless creativity, solving the most complex challenges with ingenious solutions.",
      initial: "A",
    },
  ];

  return (
    <TeamSection id="team">
      <div className="container">
        <SectionTitle className="glitch" data-text="OUR TEAM">
          OUR TEAM
        </SectionTitle>

        <TeamGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} variants={itemVariants}>
              <RobotFace>
                <RobotHead>
                  <RobotEyes>
                    <RobotEye
                      animate="open"
                      variants={eyeBlinkVariants}
                      whileInView={{
                        height: [12, 1, 12],
                        y: [0, 5, 0],
                      }}
                      transition={{
                        duration: 0.2,
                        repeat: 3,
                        repeatDelay: 2,
                      }}
                    />
                    <RobotEye
                      animate="open"
                      variants={eyeBlinkVariants}
                      whileInView={{
                        height: [12, 1, 12],
                        y: [0, 5, 0],
                      }}
                      transition={{
                        duration: 0.2,
                        repeat: 3,
                        repeatDelay: 2,
                      }}
                    />
                  </RobotEyes>
                  <RobotMouth variants={mouthVariants} animate="speak" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      right: "5px",
                      fontSize: "0.7rem",
                      color: "black",
                    }}
                  >
                    {member.initial}
                  </div>
                </RobotHead>
              </RobotFace>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
            </TeamCard>
          ))}
        </TeamGrid>
      </div>
    </TeamSection>
  );
};

export default Team;
