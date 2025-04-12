import { useCallback, useEffect, useState } from "react";
import { getSingleProduct } from "../utilities/api";
import { Link, useNavigate, useParams } from "react-router";
import { useThemeContext } from "../Context/ThemeProvider";
import { BsCash, BsClock, BsMortarboard, BsYoutube } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../store/hook";
import disabledIntro from "../assets/images/disabled-intro.png";
import AccordionComponent from "../Components/AccordionComponent";
export type Productsessions = {
  title: string;
  description: Array<string>;
};
import unknownPic from "../assets/images/unknown.jpg";
import masoodPic from "../assets/images/ZoomedMasood.jpeg";
import { addNewOrder, Order } from "../store/orderSlice";
import { toast } from "react-toastify";

export type ProductType = {
  id: number;
  title: string;
  status: string;
  price: string;
  thumbnail: string;
  url: string;
  description: string;
  studentsCount: string;
  timeCourse: string;
  sessions: Array<Productsessions>;
};

function ProductPage() {
  const { id } = useParams();

  const { theme } = useThemeContext();
  const [product, setProduct] = useState<ProductType>();

  const navigator = useNavigate();

  const fetchProduct = useCallback(async () => {
    try {
      const res = await getSingleProduct(id);
      setProduct(res);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const orders: Array<Order> = useAppSelector((state) => state.orders.orders);
  const dispatch = useAppDispatch();
  console.log(orders);
  const addProductToCart = () => {
    const isExist = orders.some((order) => order.id == product?.id);
    if (isExist) {
      toast.error("این دوره داخل سبد خرید وجود دارد.");
    } else {
      dispatch(addNewOrder(product));
      toast.success('دوره به سبد خرید اضافه شد')
    }
  };

  const token = useAppSelector((state) => state?.authentication.token);

  return (
    <div>
      <section className="mt-5">
        <div
          className={`container px-3 sm:px-5 lg:px-12 py-5 rounded-xl flex flex-col ${
            theme == "dark" ? "bg-gray-600" : "bg-[#f5f5f5]"
          }`}>
          <div className="flex justify-between items-center gap-2">
            <div className="flex flex-col">
              <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold">
                {product?.title}
              </h2>
              <div className="flex flex-wrap mt-10">
                <div className="flex items-center gap-1.5 text-[16px] sm:text-[18px] lg:px-3 w-1/2 my-2 text-nowrap">
                  <BsCash className="text-[24px] min-w-fit" />
                  <span>
                    {product?.price == "0" ? "رایگان" : product?.price}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[16px] sm:text-[18px] lg:px-3 w-1/2 my-2 text-nowrap">
                  <BsMortarboard className="text-[24px] min-w-fit" />
                  <span>{product?.studentsCount}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[16px] sm:text-[18px] lg:px-3 w-1/2 my-2 text-nowrap">
                  <BsClock className="text-[24px] min-w-fit" />
                  <span>{product?.timeCourse}</span>
                </div>
              </div>
              <button
                className="ml-auto my-4 text-[rgb(248,249,250)] px-3 bg-[#1976D2] py-2 rounded-lg hover:bg-[#1564b3] transition-colors "
                onClick={() => {
                  if (token) addProductToCart();
                  else {
                    navigator("/auth");
                    toast.info('برای ثبت نام در دوره ابتدا وارد شوید')
                  }
                }}>
                ثبت نام در دوره
              </button>
            </div>
            {token ? (
              <video
                crossOrigin="anonymous"
                className="hidden md:block md:h-45 lg:h-60 xl:h-80   rounded-xl"
                src={"http://localhost:5000" + product?.url}
                controls></video>
            ) : (
              <Link to={"/auth"} className="relative hidden md:block    ">
                <img
                  alt="disabled"
                  className="md:h-45 lg:h-60  xl:h-80  rounded-xl blur-[2px] pointer-events-none"
                  src={disabledIntro}
                />
                <div className="absolute inset-0 flex items-center  p-2 justify-center text-white text-[14px] font-semibold bg-black/40 rounded-lg">
                  برای مشاهده ویدیو وارد شوید.
                </div>
              </Link>
            )}
          </div>
          <div className=" ml-auto mt-5 font-medium ">
            <div className="flex items-center gap-4 cursor-pointer ml-auto">
              <BsYoutube className="md:text-[22px] lg:text-[24px]" />
              <span>مشاهده دوره در کانال یوتوب</span>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`my-20 p-2 md:p-10 rounded-lg ${
          theme == "dark" ? "bg-gray-500" : "bg-white"
        }`}>
        <div>{product?.description}</div>
        <div className="my-10">
          <h3 className="text-[22px]">سرفصل ها</h3>
          {product?.sessions &&
            product?.sessions.map((item, index) => {
              let startnumber = 0;
              product.sessions.slice(0, index).forEach((item) => {
                startnumber = startnumber + item.description.length;
              });
              return (
                <AccordionComponent
                  key={index}
                  session={item}
                  startNum={startnumber}
                />
              );
            })}
        </div>
        <div>
          <h2 className="text-[20px] font-bold px-5">دیدگاه‌ها:</h2>
          <div className="flex flex-col border rounded-xl p-4 border-gray-300">
            <div className="flex items-center gap-2 ">
              <img className="rounded-full h-20" src={unknownPic} alt="" />
              <div className="flex flex-col gap-2">
                <p className="font-bold">meysam</p>
                <p>آذر 19, 1403 در 10:09 ق.ظ</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5 p-2">
              <p className="text-[15px] md:text-[18px]">
                بسیار عالی و ممنون از حضور مستمر مهندس در عرصه آموزش.
              </p>
              <button className="text-[15px] md:text-[18px] cursor-pointer text-blue-400 bg-blue-100 p-1 md:p-2  rounded">
                برای پاسخ وارد شوید
              </button>
            </div>
          </div>
          <div className="border border-gray-300 px-4 py-6 mt-6 mr-0 md:mr-20 bg-gray-300 rounded-2xl">
            <div
              className={`flex flex-col border rounded-xl p-4 ${
                theme == "dark" ? "bg-gray-500" : "bg-white"
              } border-gray-300 relative`}>
              <div className="absolute h-[150px] w-[50px] border-b border-r border-gray-300 right-[-67px] hidden md:block top-[-50px]"></div>
              <div className="flex items-center gap-2 ">
                <img className="rounded-full h-20" src={masoodPic} alt="" />
                <div className="flex flex-col gap-2">
                  <p className="font-bold">مسعود صدری</p>
                  <p>آذر 19, 1403 در 1:48 ب.ظ</p>
                </div>
              </div>
              <div className="flex flex-col   mt-5 p-2">
                <p className="text-[15px] md:text-[18px]">سلام . </p>
                <p className="text-[15px] md:text-[18px]">ممنونم از لطفتون. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
