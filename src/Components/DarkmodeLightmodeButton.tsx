import { useThemeContext } from "../Context/ThemeProvider";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function DarkmodeLightmodeButton() {
  const { theme, changeTheme } = useThemeContext();

  return (
    <div
      className={`${
        theme == "dark" ? `bg-[#3d465a]` : `bg-[#cae2fa]`
      } text-[black] flex gap-1 p-0.5 flex-row my-auto mr-5 items-center text-3xl hover:cursor-pointer  rounded-3xl`}>
      <MdOutlineDarkMode
        onClick={() => changeTheme("dark")}
        className={`${
          theme == "dark" ? `text-[#3d465a] bg-blue-300 ` : ""
        }    hover:bg-blue-300 hover:text-white active:bg-blue-400 transition  rounded-3xl p-1`}
      />
      <MdOutlineLightMode
        onClick={() => changeTheme("light")}
        className={`${
          theme == "light" ? ` bg-blue-300` : ""
        }  text-white hover:bg-blue-300 hover:blue-white active:bg-blue-400 transition  rounded-3xl p-1`}
      />
    </div>
  );
}

export default DarkmodeLightmodeButton;
