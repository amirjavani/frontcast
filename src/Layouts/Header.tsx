import frontcastLogo from "../assets/images/frontcast-logo-top.png";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import Navbar from "./Navbar";
import { useThemeContext } from "../Context/ThemeProvider";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuToggle = () => {
    setShowMenu(!showMenu);
  };

    const { theme ,changeTheme } = useThemeContext();
  


  return (
    <header className={`pt-12 `}>
      <div className="container ">
        <nav className="flex  flex-row justify-between items-center h-14 py-3 ">
          <TfiMenu
            onClick={() => showMenuToggle()}
            className="show lg:hidden text-[40px] text-[rgb(134,134,134)] py-0.5 px-2  border rounded cursor-pointer hover:bg-[rgb(240,239,239)]"
          />
          <Navbar className={"flex-row lg:flex hidden"} />
          <button onClick={()=>changeTheme(theme=='dark'?'light':'dark')}>theme</button>
          <img className="h-full" src={frontcastLogo} alt="" />
        </nav>
        <div
          className={`transition-[100px]  duration-600 ease overflow-hidden lg:hidden 
            ${showMenu ? "max-h-96 " : "max-h-0 "}
            `}>
          <Navbar className="flex flex-col bg-gray-200 p-4 rounded-md" />
        </div>
      </div>
    </header>
  );
}

export default Header;
