import { Link } from "react-router";
import masood from "../assets/images/masood.jpg";
import { BsCameraVideo, BsChatDots, BsClock, BsListCheck, BsPencilSquare, BsWallet2 } from "react-icons/bs";

function IntroductionComponent() {
  return (
    <section className="mt-20 text-start flex justify-between items-center">
      <div className="w-[100%]">
        <h2 className="text-[32px] font-bold mb-[48px]">
          برنامه نویسی به زبان ساده.
        </h2>
        <p className="text-[16px] mb-[16px]">
          در فرانت کست می‌توانید مهارت‌های برنامه نویسی خود را تقویت کنید
        </p>
        <p className="text-[16px] mb-[30px]">
          {" "}
          و به یک توسعه‌دهنده حرفه‌ای تبدیل شوید.
        </p>
        <Link
          to="/course"
          className="text-[rgb(248,249,250)] px-3 bg-[#1976D2] py-2 rounded-lg hover:bg-[#1564b3] transition-colors  mb-[30px]">
          شروع یادگیری
        </Link>
        <div className="flex flex-wrap mt-15 text-[18px] font-bold justify-center ">
          <p className="flex items-center gap-2 mt-5 w-1/2 md:w-1/3">
            <BsPencilSquare className="text-[26px] text-[#0c7bea]" />
            یادگیری با انجام تمرین
          </p>
          <p className="flex items-center gap-2 mt-5 w-1/2 md:w-1/3">
            <BsClock className="!text-[26px] text-[#0c7bea]" />
            ویدیوهای کوتاه و با کیفیت
          </p>
          <p className="flex items-center gap-2 mt-5 w-1/2 md:w-1/3">
            <BsWallet2 className="text-[26px] text-[#0c7bea]" />
            ضمانت بازگشت وجه
          </p>
          <p className="flex items-center gap-2 mt-5 w-1/2 md:w-1/3">
            <BsCameraVideo className="text-[26px] text-[#0c7bea]" />
            به روز رسانی رایگان
          </p>
          <p className="flex items-center gap-2 mt-5 w-1/2 md:w-1/3">
            <BsListCheck className="!text-[26px] text-[#0c7bea]" />
            سرفصل‌های جامع و دقیق
          </p>
          <p className="flex items-center gap-2 mt-5 w-1/2 md:w-1/3">
            <BsChatDots className="text-[26px] text-[#0c7bea]" />
            پشتیبانی دوره‌ها
          </p>
        </div>
      </div>
      <img
        className="rounded-3xl hidden h-fit lg:flex lg:w-2/5 xl:w-fit "
        src={masood}
        alt="masood"
      />
    </section>
  );
}

export default IntroductionComponent;
