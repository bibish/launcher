import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import llmService from "../services/llmService";

const TerminalContainer = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 20px var(--primary-color);
  border-radius: 5px;
  margin: 40px auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TerminalHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary-color);
`;

const TerminalTitle = styled.div`
  color: var(--primary-color);
  font-family: var(--font-retro);
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
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  font-family: var(--font-retro);
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 1.4;
`;

const TerminalInputLine = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TerminalPrompt = styled.span`
  color: var(--secondary-color);
  margin-right: 10px;
`;

const TerminalInputText = styled.input`
  background: transparent;
  border: none;
  color: var(--text-color);
  font-family: var(--font-retro);
  font-size: 0.9rem;
  width: 100%;
  outline: none;
  caret-color: var(--primary-color);
`;

const TerminalResponse = styled.div`
  color: var(--primary-color);
  margin-bottom: 15px;
  padding-left: 20px;
  border-left: 2px solid var(--secondary-color);
  white-space: pre-line;
`;

const TerminalError = styled.div`
  color: #ff5f56;
  margin-bottom: 15px;
`;

const Terminal = () => {
  const [inputValue, setInputValue] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{ type: string; content: string }>
  >([
    { type: "system", content: "ALLTHINGS AI Terminal v1.0.0" },
    {
      type: "system",
      content:
        "Enter a command to interact with the AI. Type 'help' for assistance.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendToLLM = async (command: string) => {
    setIsLoading(true);
    try {
      const response = await llmService.sendCommandToLLM(command);
      setTerminalHistory((prev) => [
        ...prev,
        { type: "response", content: response },
      ]);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      setTerminalHistory((prev) => [
        ...prev,
        {
          type: "error",
          content: `Error: Unable to connect to LLM service. ${errorMessage}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const command = inputValue.trim();
    setTerminalHistory((prev) => [
      ...prev,
      { type: "command", content: command },
    ]);
    setInputValue("");

    await sendToLLM(command);
  };

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <TerminalContainer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TerminalHeader>
        <TerminalTitle>ALLTHINGS.terminal</TerminalTitle>
        <TerminalControls>
          <TerminalControl />
          <TerminalControl />
          <TerminalControl />
        </TerminalControls>
      </TerminalHeader>
      <TerminalContent ref={contentRef}>
        {terminalHistory.map((item, index) => {
          if (item.type === "command") {
            return (
              <TerminalInputLine key={index}>
                <TerminalPrompt>$</TerminalPrompt>
                <span>{item.content}</span>
              </TerminalInputLine>
            );
          } else if (item.type === "response") {
            return (
              <TerminalResponse key={index}>{item.content}</TerminalResponse>
            );
          } else if (item.type === "error") {
            return <TerminalError key={index}>{item.content}</TerminalError>;
          } else {
            return (
              <div key={index} style={{ marginBottom: "10px" }}>
                {item.content}
              </div>
            );
          }
        })}

        <form onSubmit={handleSubmit}>
          <TerminalInputLine>
            <TerminalPrompt>$</TerminalPrompt>
            <TerminalInputText
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              disabled={isLoading}
              placeholder={isLoading ? "Processing..." : "Enter command..."}
            />
          </TerminalInputLine>
        </form>
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal;
