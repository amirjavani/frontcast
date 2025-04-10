import { useCallback, useEffect, useState } from "react";
import { getSingleProduct } from "../utilities/api";
import { Link, useParams } from "react-router";
import { useThemeContext } from "../Context/ThemeProvider";
import { BsCash, BsClock, BsMortarboard, BsYoutube } from "react-icons/bs";

type ProductSesions = {
  title: string;
  description: string;
};

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
  sesions: Array<ProductSesions>;
};

function ProductPage() {
  const { id } = useParams();

  const { theme } = useThemeContext();
  const [product, setProduct] = useState<ProductType>();

  const fetchProduct = useCallback(async () => {
    try {
      const res = await getSingleProduct(id);
      console.log(res);
      setProduct(res);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const addProductToCart = () => {};

  return (
    <section className="mt-5">
      <div
        className={`container px-3 sm:px-5 lg:px-12 py-5 rounded-xl flex flex-col ${
          theme == "dark" ? "bg-[#f5f5f5]" : "bg-[#f5f5f5]"
        }`}>
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold">
              {product?.title}
            </h2>
            <div className="flex flex-wrap mt-10">
              <div className="flex items-center gap-1.5 text-[16px] sm:text-[18px] lg:px-3 w-1/2 my-2 text-nowrap">
                <BsCash className="text-[24px] min-w-fit" />
                <span>{product?.price == "0" ? "رایگان" : product?.price}</span>
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
              onClick={() => addProductToCart}>
              ثبت نام در دوره
            </button>
          </div>
          <video
            crossOrigin="anonymous"
            className="hidden md:block md:h-45 lg:h-50 xl:h-60  rounded-xl"
            src={"http://localhost:5000" + product?.url}
            controls></video>
        </div>
        <div className=" ml-auto mt-5 font-medium ">
          <div className="flex items-center gap-4 cursor-pointer ml-auto">
            <BsYoutube className="md:text-[22px] lg:text-[24px]" />
            <span>مشاهده دوره در کانال یوتوب</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
