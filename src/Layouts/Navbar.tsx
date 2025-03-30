import { Link } from "react-router";

function Navbar ({className}: {className:string}) {
  return (
    <ul
      className={`${
        className
        // showMenu
        //   ? "flex flex-col  top-30 bg-[rgb(134,134,134)] p-4 w-full"
        //   : "hidden"
      }     gap-5 lg:gap-8 text-[16px] font-bold `}>
      <li>
        <Link
          to="/login"
          className="text-[rgb(248,249,250)] px-3 bg-[#1976D2] py-2 rounded-lg hover:bg-[#1564b3] transition-colors ">
          حساب کاربری
        </Link>
      </li>
      <li className="hover:text-[#1976D2]  transition-colors">
        <Link to="">صفحه اصلی</Link>
      </li>
      <li className="hover:text-[#1976D2]  transition-colors">
        <Link to="">دوره‌های آموزشی</Link>
      </li>
      <li className="hover:text-[#1976D2]  transition-colors">
        <Link to="">سبد خرید</Link>
      </li>
    </ul>
  );
}

export default Navbar;
