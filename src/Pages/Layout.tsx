import Navbar from "../components/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  //   useState fix
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
