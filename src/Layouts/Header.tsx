import frontcastLogo from "../assets/images/frontcast-logo-top.png";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import Navbar from "./Navbar";
import DarkmodeLightmodeButton from "../Components/DarkmodeLightmodeButton";
import { useThemeContext } from "../Context/ThemeProvider";
import { Link } from "react-router";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useThemeContext();

  const showMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`pt-12 mb-10 `}>
      <div className="container ">
        <nav className="flex  flex-row justify-between items-center h-14 py-3 ">
          <TfiMenu
            onClick={() => showMenuToggle()}
            className="show lg:hidden text-[40px] text-[rgb(134,134,134)] py-0.5 px-2  border rounded cursor-pointer hover:bg-[rgb(240,239,239)]"
          />
          <Navbar className={"flex-row lg:flex hidden"} />
          <DarkmodeLightmodeButton />

          <Link className="" to={"/"}>
            <img className="h-6 sm:h-10" src={frontcastLogo} alt="logo" />
          </Link>
        </nav>
        <div
          className={`transition-[100px]  duration-600 ease-in-out overflow-hidden lg:hidden 
            ${showMenu ? "max-h-96 " : "max-h-0 "}
            `}>
          <Navbar
            className={`flex flex-col ${
              theme == "dark" ? "bg-gray-500" : "bg-gray-200"
            }  p-4 rounded-md`}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
