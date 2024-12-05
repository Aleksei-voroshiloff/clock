// import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./ui/Header";
import { Container} from "react-bootstrap";
import NavBar from "./ui/NavBar";

function Layout() {
  return (
    <>
      <Container>
        <NavBar  />
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
