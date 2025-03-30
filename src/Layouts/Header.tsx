import { Link } from "react-router";
import frontcastLogo from "../assets/images/frontcast-logo-top.png";
import { TfiMenu } from "react-icons/tfi";
import { useRef, useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useRef(null);

  return (
    <header className={`pt-12 `}>
      <div className="container ">
        <nav className="flex  flex-row justify-between items-center h-14 py-3 ">
          <TfiMenu
            onClick={() => showMenuToggle()}
            className="show md:hidden text-[40px] text-[rgb(134,134,134)] py-0.5 px-2  border rounded cursor-pointer hover:bg-[rgb(240,239,239)]"
          />
          <Navbar className={"flex-row md:flex hidden"} />
          <img className="h-full" src={frontcastLogo} alt="" />
        </nav>
        <div
          className={`transition-[100px] duration-300 ease-in-out overflow-hidden md:hidden 
            ${showMenu ? "max-h-96" : "max-h-0"}
            `}>
          <Navbar className="flex flex-col bg-gray-100 p-4 rounded-md" />
        </div>
      </div>
    </header>
  );
}

export default Header;
