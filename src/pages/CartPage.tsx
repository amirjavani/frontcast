import { useNavigate } from "react-router";
import { useThemeContext } from "../Context/ThemeProvider";
import { useAppSelector } from "../store/hook";
import { BsTrash } from "react-icons/bs";

function CartPage() {
  const { theme } = useThemeContext();
  const token = useAppSelector((state) => state?.authentication.token);
  const navigator = useNavigate();

  const orders = useAppSelector((state) => state.orders.orders);

  const totalPrice = orders.reduce((sum, order) => sum +  Number(order.price.replace(/,/g, "")), 0)
   
  const submitOrders = () => {};
  return (
    <div
      className={` ${
        theme == "dark" ? "bg-gray-500" : "bg-white"
      } rounded-xl p-4 sm:p-8  md:p-10 xl:p-15 flex flex-col justify-center items-center gap-5`}>
      <h2 className="text-[28px] font-bold ml-auto">سبد خرید</h2>

      {orders.length > 0 ? (
        orders.map((item) => (
          <div
            className={`p-10 flex w-full md:w-10/12 font-bold justify-between ${
              theme == "dark" ? "bg-[#50576b] " : "bg-[#f8f9fa] "
            }  rounded`}>
            <p>{item.title}</p>
            <div className="flex gap-12 items-center">
              <p>{item.price} تومان</p>
              <BsTrash className="text-red-600 text-2xl" />
            </div>
          </div>
        ))
      ) : (
        <></>
      )}

      <div className="p-6 flex bg-blue-100 text-blue-500 font-bold w-full md:w-10/12 justify-between rounded-xl">
        <div>جمع کل : </div>
        <div className="ml-20">
          {totalPrice.toLocaleString()} تومان
        </div>
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
