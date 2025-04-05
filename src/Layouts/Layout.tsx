import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import { useThemeContext } from "../Context/ThemeProvider";
import HomePage from "../pages/HomePage";

function Layout() {
  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <div
      dir="rtl"
      className={`main-font  ${
        theme=='dark' ? "bg-[#50576b] text-[#f8f9fa]" : "bg-[#f8f9fa] text-[#212121]"
      }   transition-all`}>
      <div className="container px-10 mx-auto lg:px-20">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
