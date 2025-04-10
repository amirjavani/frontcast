import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import { useThemeContext } from "../Context/ThemeProvider";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import AuthPage from "../pages/AuthPage";
import MyAccountPage from "../pages/MyAccountPage";
import ProductPage from "../pages/ProductPage";

function Layout() {
  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <div
      dir="rtl"
      className={`main-font  ${
        theme == "dark"
          ? "bg-[#50576b] text-[#f8f9fa]"
          : "bg-[#f8f9fa] text-[#212121]"
      }   transition-all`}>
      <div className="container px-10 mx-auto lg:px-20">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/my-account" element={<MyAccountPage />}>
            <Route
              index
              element={
                <div>
                  <p>سلام</p>
                  <p>
                    فایل‌های دوره‌هایی که ثبت نام کرده‌اید در قسمت دوره‌ها قرار
                    دارد.
                  </p>
                </div>
              }
            />
            <Route path="downloads" element={<>دوره ها</>} />
            <Route path="edit-account" element={<>ویرایش</>} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
