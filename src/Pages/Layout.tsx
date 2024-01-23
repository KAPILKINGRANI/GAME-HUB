import Navbar from "../components/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [searchText, setSearchText] = useState("");
  //   useState fix
  return (
    <>
      <Navbar onSearch={(searchText) => setSearchText(searchText)} />
      <Outlet />
    </>
  );
};

export default Layout;
