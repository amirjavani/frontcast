import { BsArrowDownLeft } from "react-icons/bs";
import { Link } from "react-router";
import { useThemeContext } from "../Context/ThemeProvider";

function CardComponent() {

    const {theme} = useThemeContext()
  return (
    <div className={`flex flex-col justify-start w-full  ${theme=='dark'?'bg-gray-500':'bg-white'}  shadow rounded-t-2xl rounded-b-2xl`}>
      <Link to={"/"}>
        <img
          className="rounded-t-2xl"
          src={
            "https://frontcast.ir/wp-content/uploads/2024/11/tailwind-css-600_400-1x-1.png"
          }
          alt="pic"
        />
      </Link>
      <div className="px-5 py-6 flex flex-col gap-16">
        <p className="font-bold text-[20px]">آموزش Tailwind CSS – دوره فشرده</p>
        <div className="flex justify-between">
          <Link className="flex" to={"/"}>
            مشاهده دوره <BsArrowDownLeft />
          </Link>
          <span>قیمت </span>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
