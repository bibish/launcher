import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 20px;
  position: relative;
`;

const GridLines = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  transform: perspective(500px) rotateX(60deg);
  background: repeating-linear-gradient(
      90deg,
      var(--grid-color),
      var(--grid-color) 1px,
      transparent 1px,
      transparent 80px
    ),
    repeating-linear-gradient(
      0deg,
      var(--grid-color),
      var(--grid-color) 1px,
      transparent 1px,
      transparent 80px
    );
  z-index: -1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-family: var(--font-pixel);
  color: var(--primary-color);
  text-shadow: var(--glow-shadow);
  margin-bottom: 1rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-family: var(--font-retro);
  color: var(--secondary-color);
  text-shadow: 0 0 10px var(--secondary-color);
  margin-bottom: 2rem;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Terminal = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--secondary-color);
  box-shadow: 0 0 20px var(--secondary-color);
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 800px;
  height: 300px;
  overflow: hidden;
  font-family: var(--font-retro);
  text-align: left;
  margin: 30px 0;
  position: relative;
`;

const TerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--secondary-color);
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const TerminalTitle = styled.div`
  color: var(--secondary-color);
  font-size: 0.9rem;
`;

const TerminalControls = styled.div`
  display: flex;
  gap: 8px;
`;

const TerminalControl = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &:nth-child(1) {
    background-color: #ff5f56;
  }

  &:nth-child(2) {
    background-color: #ffbd2e;
  }

  &:nth-child(3) {
    background-color: #27c93f;
  }
`;

const TerminalContent = styled.div`
  height: calc(100% - 30px);
  color: var(--text-color);
  overflow: auto;
`;

const TerminalLine = styled.div`
  display: flex;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const TerminalPrompt = styled.span`
  color: var(--secondary-color);
  margin-right: 8px;
`;

const TerminalCommand = styled.span`
  color: var(--text-color);
`;

const TerminalOutput = styled(motion.div)`
  color: var(--primary-color);
  margin-bottom: 8px;
  line-height: 1.4;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background-color: var(--secondary-color);
  animation: blink 1s step-end infinite;
  vertical-align: middle;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const CTAButton = styled(motion.a)`
  font-family: var(--font-pixel);
  background-color: transparent;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  padding: 15px 30px;
  margin-top: 30px;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0 0 10px var(--secondary-color);
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--background-color);
  }
`;

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    "Initializing ALLTHINGS AI System...",
    "Connecting to Allphins...",
    "Checking CEDE data...",
    "Asking some questions to Maxime...",
    "Allthings is almost ready and will be available in April 2025",
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      let index = 0;
      const timer = setInterval(() => {
        setDisplayedText(lines[currentLine].substring(0, index));
        index++;

        if (index > lines[currentLine].length) {
          clearInterval(timer);

          setTimeout(() => {
            setCurrentLine(currentLine + 1);
          }, 500);
        }
      }, 40);

      return () => clearInterval(timer);
    } else {
      setTypingComplete(true);
    }
  }, [currentLine]);

  return (
    <HeroContainer>
      <GridLines />

      <HeroTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        ALLTHINGS
      </HeroTitle>

      <HeroSubtitle
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        The Ultimate Allphins AI Agent
      </HeroSubtitle>

      <Terminal
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <TerminalHeader>
          <TerminalTitle>ALLTHINGS.exe</TerminalTitle>
          <TerminalControls>
            <TerminalControl />
            <TerminalControl />
            <TerminalControl />
          </TerminalControls>
        </TerminalHeader>

        <TerminalContent>
          <TerminalLine>
            <TerminalPrompt>$</TerminalPrompt>
            <TerminalCommand>start ALLTHINGS.exe</TerminalCommand>
          </TerminalLine>

          <TerminalOutput
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayedText} {!typingComplete && <Cursor />}
          </TerminalOutput>

          {typingComplete && (
            <>
              <TerminalLine>
                <TerminalPrompt>$</TerminalPrompt>
                <TerminalCommand>
                  ready_for_commands <Cursor />
                </TerminalCommand>
              </TerminalLine>
            </>
          )}
        </TerminalContent>
      </Terminal>

      <CTAButton
        href="#features"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: typingComplete ? 1 : 0,
          y: typingComplete ? 0 : 20,
        }}
        transition={{ duration: 0.6 }}
      >
        Discover Features
      </CTAButton>
    </HeroContainer>
  );
};

export default Hero;
