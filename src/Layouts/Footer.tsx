import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import zarinpalImage from "../assets/images/zarinpal.png";
import { Link } from "react-router";
function Footer() {
  return (
    <footer className="mt-10  text-[#424242]">
      <hr className="opacity-20"></hr>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <ul className="mt-12 flex flex-col items-center text-[16px] font-bold gap-12 sm:flex-row md:mx-auto sm:justify-between md:justify-start">
            <li className="transition-colors duration-300 cursor-pointer hover:text-[#1976D2]">
              <Link to={"/about"}> درباره ما</Link>
            </li>
            <li className="transition-colors duration-300 cursor-pointer hover:text-[#1976D2]">
              <Link to={"/contact"}> 
              تماس با ما</Link>
            </li>
            <li className="transition-colors duration-300 cursor-pointer hover:text-[#1976D2]">
              <Link to={"/terms"}> شرایط استفاده</Link>
            </li>
            <li className="transition-colors duration-300 cursor-pointer hover:text-[#1976D2]">
              <Link to={"/blog"}> وبلاگ</Link>
            </li>
            <li className="transition-colors duration-300 cursor-pointer hover:text-[#1976D2]">
              <Link to={"/"}> کانال تلگرام</Link>
            </li>
          </ul>
          <div className="mt-12  font-bold flex flex-row justify-center sm:justify-start items-center gap-4">
            <p className="text-[16px]"> شبکه‌های اجتماعی :</p>
            <div className="flex flex-row  text-xl gap-2">
              <FaTwitter className="cursor-pointer" />
              <AiOutlineInstagram className="cursor-pointer" />
              <FaTelegram className="cursor-pointer" />
              <AiFillYoutube className="cursor-pointer" />
              <AiFillLinkedin className="cursor-pointer" />
            </div>
          </div>
        </div>
        <img
          className="max-h-fit max-w-fit  mt-10"
          src={zarinpalImage}
          alt="zarinpall"
        />
      </div>

      <p className="mt-12 text-center  md:text-start pb-35 md:pb-20">
        تمامی حقوق برای فرانت‌کست محفوظ است.
      </p>
    </footer>
  );
}

export default Footer;
