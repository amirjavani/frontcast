import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";

function Layout() {
  const darkmode = false;
  return (
    <div
      dir="rtl"
      className={`main-font  ${
        darkmode ? "bg-[#414757] text-[#f8f9fa]" : "bg-[#f8f9fa] text-[#212121]"
      }   transition-all`}>
      <div className="container px-10 mx-auto lg:px-20">
        <Header />
        <Routes>
          <Route path="/" element={<>Home</>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
