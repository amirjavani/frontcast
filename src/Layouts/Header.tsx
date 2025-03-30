import { Link } from "react-router";
import frontcastLogo from "../assets/images/frontcast-logo-top.png";
import { TfiMenu } from "react-icons/tfi";
import { useRef, useState } from "react";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    
    const showMenuToggle=()=>{
        setShowMenu(!showMenu)
    }
    
    useRef(null)

  return (
    <header className="pt-12">
      <div className="container">
        <nav className="flex flex-row justify-between items-center h-14 py-3 ">
          <TfiMenu   onClick={()=>showMenuToggle()} className="show md:hidden text-[40px] text-[rgb(134,134,134)] py-0.5 px-2  border rounded cursor-pointer hover:bg-[rgb(240,239,239)]" />
          <ul  className={`${showMenu?'flex flex-col relative top-30 bg-[rgb(134,134,134)] p-4 w-full':'hidden'} md:flex  md:flex-row gap-5 lg:gap-8 text-[16px] container font-bold `}>
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
          <img className="h-full" src={frontcastLogo} alt="" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
