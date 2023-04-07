import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import List from "./Setting/List";

const Settings = () => {
  return (
    <>
     <Navbar />
    <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <List />
        </Box>
      </Box>
    </>
  );
};

export default Settings;
