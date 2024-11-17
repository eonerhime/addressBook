import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Main = styled.main`
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function AppLayout() {
  const darkModeStyle = {
    backgroundColor: "var(--color-grey-0)",
  };

  return (
    <div
      style={darkModeStyle}
      className="m-auto grid h-dvh grid-cols-[15%_85%] grid-rows-[auto_1fr_auto] md:grid-cols-[17%_83%]"
    >
      <Header />
      <Sidebar />
      <Main className="px-[1.4rem] pb-[3.2rem] pt-8 md:px-[4.8rem] md:pb-[4rem] md:pt-16">
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
