import { useEffect } from "react";
import styled from "styled-components";

const ScanlineEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.03) 50%,
    rgba(255, 255, 255, 0)
  );
  pointer-events: none;
  z-index: 10;
  animation: scanline 8s linear infinite;

  @keyframes scanline {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;

const NoiseOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
  pointer-events: none;
  z-index: 9;
`;

const VHSEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent 0%,
    rgba(255, 0, 255, 0.03) 2%,
    transparent 3%,
    rgba(0, 255, 255, 0.03) 50%,
    transparent 51%,
    rgba(255, 0, 255, 0.03) 99%,
    transparent 100%
  );
  background-size: 100% 8px;
  pointer-events: none;
  z-index: 8;
`;

const CRTEdges = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0.65) 100%
  );
  pointer-events: none;
  z-index: 7;
`;

const RetroEffects = () => {
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const root = document.documentElement;

      // Random glitch effect
      if (Math.random() > 0.95) {
        root.style.setProperty("--primary-color", "#00ffff");
        root.style.setProperty("--secondary-color", "#ff00ff");

        setTimeout(() => {
          root.style.setProperty("--primary-color", "#ff00ff");
          root.style.setProperty("--secondary-color", "#00ffff");
        }, 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <>
      <ScanlineEffect />
      <NoiseOverlay />
      <VHSEffect />
      <CRTEdges />
    </>
  );
};

export default RetroEffects;
