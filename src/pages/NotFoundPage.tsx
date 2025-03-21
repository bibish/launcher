import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 0 20px;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 8rem;
  font-family: var(--font-pixel);
  color: var(--primary-color);
  text-shadow: var(--glow-shadow);
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const ErrorTitle = styled(motion.h2)`
  font-size: 2rem;
  font-family: var(--font-retro);
  color: var(--secondary-color);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ErrorMessage = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const HomeButton = styled(motion.div)`
  margin-top: 20px;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <ErrorCode
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </ErrorCode>

      <ErrorTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        FILE NOT FOUND
      </ErrorTitle>

      <ErrorMessage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        The system has encountered a critical error trying to access the
        requested file. Reality matrix corrupted or file does not exist.
      </ErrorMessage>

      <HomeButton
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Link to="/" className="button">
          Return to MainFrame
        </Link>
      </HomeButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
