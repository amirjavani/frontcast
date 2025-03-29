import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";

function Layout() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<>sss</>} />
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
