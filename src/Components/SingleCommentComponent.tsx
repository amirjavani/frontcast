import { useThemeContext } from "../Context/ThemeProvider";

function SingleCommentComponent() {
    const { theme } = useThemeContext();

  return (
<div
          className={`flex flex-col w-full shadow ${
            theme == "dark" ? "bg-gray-500" : "bg-white"
          } rounded-2xl p-4`}>
          <div className="flex items-center gap-4">
            <img
              className="rounded-full"
              src="https://frontcast.ir/wp-content/themes/frontcast-5-0-0/images/jalali.jpg"
              alt="pic"
            />
            <span>علی جلالی</span>
          </div>
          <p className="mt-2">
            من در چند دوره‌ی ویدیویی و حضوری آموزش برنامه نویسی شرکت کرده بودم،
            ولی با حضور در دوره‌های ری‌اکت و نود جی‌اس استاد صدری به عمیق‌ترین
            مفاهیم برنامه نویسی جاوااسکریپت پی بردم. روش تدریس ایشون رو تا به
            حال در هیچ کدوم از دوره‌های مشابه ندیده بودم. از مفاهیم بسیار ساده
            شروع شده و پله پله بدون اینکه کسی لحظه‌ای از کلاس عقب بمونه تمام
            حاضرین رو تا رسیدن به پیشرفته‌ترین مراحل با خودشون همراه می‌کردن. من
            به شخصه کل پیشرفت‌هایی که در زمینه برنامه نویسی داشتم رو مدیون ایشون
            هستم. بعد از اتمام دوره‌ها توسط ایشون به یک شرکت دانش بنیان معرفی
            شدم و هم اکنون با این شرکت در حال همکاری هستم.
          </p>
        </div>
  )
}

export default SingleCommentComponent
