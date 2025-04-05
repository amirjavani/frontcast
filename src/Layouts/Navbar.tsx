import { Link } from "react-router";

function Navbar({ className }: { className: string }) {
  return (
    <ul className={`${className }  gap-5 xl:gap-8 text-[18px] font-bold `}>
      <li>
        <Link
          to="/login"
          className="text-[rgb(248,249,250)] px-3 bg-[#1976D2] py-2 rounded-lg hover:bg-[#1564b3] transition-colors ">
          حساب کاربری
        </Link>
      </li>
      <li className="hover:text-[#1976D2]  transition-colors duration-300">
        <Link to="/">صفحه اصلی</Link>
      </li>
      <li className="hover:text-[#1976D2]  transition-colors duration-300">
        <Link to="/courses">دوره‌های آموزشی</Link>
      </li>
      <li className="hover:text-[#1976D2]  transition-colors duration-300">
        <Link to="/cart">سبد خرید</Link>
      </li>
    </ul>
  );
}

export default Navbar;
