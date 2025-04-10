import { useState } from "react";
import { Productsessions } from "../pages/ProductPage";
import { IoIosArrowDown } from "react-icons/io";
import { useThemeContext } from "../Context/ThemeProvider";

function AccordionComponent({
  session,
  startNum,
}: {
  session: Productsessions;
  startNum: number;
}) {
  const [activeTitle, setActiveTitle] = useState(false);
  const toggleActiveTitle = () => {
    setActiveTitle(!activeTitle);
  };

    const { theme } = useThemeContext();
  

  return (
    <div className="mt-5  w-full  md:w-1/2" >
      <button onClick={() => toggleActiveTitle()} className={`${activeTitle?'bg-blue-50 text-blue-500':`${theme=='dark'?'bg-gray-400':'bg-gray-100'} `} flex justify-between items-center cursor-pointer p-4 rounded-xl  w-full  text-start`}>
        {session?.title}
        <IoIosArrowDown className={`${activeTitle?'rotate-180':'rotate-0'} duration-500 text-[24px] transition-all`}/>
      </button>
      <div className={`px-4 gap-1.5 flex flex-col transition-[100px]  duration-500 ease-in-out overflow-hidden
        ${activeTitle?'max-h-94':'max-h-0'}
        `}>
        {session?.description.map((dis, index) => (
          <div className="flex gap-3 ">
            <span className="min-w-1/12">
              {(startNum + index + 1 < 10 ? "0" : "") +
                (startNum + index + 1) +
                "."}
            </span >
            <span className="">{dis}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionComponent;
