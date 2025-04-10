import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";
import { useThemeContext } from "../Context/ThemeProvider";
import { ProductsCard } from "../pages/HomePage";

function CardComponent({ productsCard }: { productsCard: ProductsCard }) {
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex flex-col justify-start w-full  ${
        theme == "dark" ? "bg-gray-500" : "bg-white"
      }  shadow rounded-t-2xl rounded-b-2xl`}>
      <Link to={`/product/${productsCard.id}`}>
        <img
          className="rounded-t-2xl"
          src={"http://localhost:5000" + productsCard.thumbnail}
          alt="pic"
        />
      </Link>
      <div className="px-5 py-6 flex flex-col gap-16 justify-between h-full">
        <p className="font-bold text-[20px]">{productsCard.title}</p>
        <div
          className={`flex items-center justify-between ${
            theme == "dark" ? "text-[#a6d0ff]" : "text-[#1565c0]"
          } font-bold`}>
          <Link
            className="flex items-center gap-2"
            to={`/product/${productsCard.id}`}>
            مشاهده دوره <BsArrowLeft />
          </Link>
          <span>
            {productsCard.price == "0" ? "رایگان" : productsCard.price}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
