import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RetroEffects from "./RetroEffects";
import styled from "styled-components";

const Main = styled.main`
  position: relative;
  z-index: 1;
`;

const Layout = () => {
  return (
    <>
      <RetroEffects />
      <div className="scanline"></div>

      <div className="container">
        <Header />
      </div>

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </>
  );
};

export default Layout;
