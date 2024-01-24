import Navbar from "../components/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  const [searchText, setSearchText] = useState("");
  //   useState fix
  return (
    <>
      <Navbar onSearch={(searchText) => setSearchText(searchText)} />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
