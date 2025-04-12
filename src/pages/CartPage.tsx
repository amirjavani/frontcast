import { useNavigate } from "react-router";
import { useThemeContext } from "../Context/ThemeProvider";
import { useAppSelector } from "../store/hook";

function CartPage() {
  const { theme } = useThemeContext();
  const token = useAppSelector((state) => state?.authentication.token);
  const navigator = useNavigate();

  const submitOrders = () => {};
  return (
    <div
      className={` ${
        theme == "dark" ? "bg-gray-500" : "bg-white"
      } rounded-xl p-4 sm:p-8  md:p-10 xl:p-15 flex flex-col justify-center items-center gap-5`}>
      <h2 className="text-[28px] font-bold ml-auto">سبد خرید</h2>
      <div
        className={`p-10 flex ${
          theme == "dark" ? "bg-[#50576b] " : "bg-[#f8f9fa] "
        }  rounded`}>
        آموزش Tailwind CSS – دوره فشرده
      </div>
      <div className="p-6 flex bg-blue-100 text-blue-500 font-bold w-full md:w-10/12 justify-between rounded-xl">
        <div>جمع کل : </div>
        <div className="ml-10">0 تومان</div>
      </div>
      <button
        onClick={() => (token ? submitOrders() : navigator("/auth"))}
        className="text-[rgb(248,249,250)] px-4 bg-[#1976D2] py-3 font-bold rounded-lg hover:bg-[#1564b3] transition-colors">
        {token ? "اقدام به پرداخت" : "ورود به حساب کاربری"}
      </button>
    </div>
  );
}

export default CartPage;
