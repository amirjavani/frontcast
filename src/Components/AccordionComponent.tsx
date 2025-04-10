import { useState } from "react";
import { ProductSesions } from "../pages/ProductPage";
import { BsArrowBarUp } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

function AccordionComponent({
  sesion,
  startNum,
}: {
  sesion: ProductSesions;
  startNum: number;
}) {
  const [activeTitle, setActiveTitle] = useState(false);
  const toggleActiveTitle = () => {
    setActiveTitle(!activeTitle);
  };

  return (
    <div className="my-10  w-full  md:w-1/2" >
      <button onClick={() => toggleActiveTitle()} className="flex justify-between items-center cursor-pointer p-4 rounded-xl bg-gray-100 w-full  text-start">
        {sesion?.title}
        <IoIosArrowDown />
      </button>
      <div className="p-3 gap-2.5 flex-col ">
        {sesion?.description.map((dis, index) => (
          <div className="flex gap-3">
            <span>
              {(startNum + index + 1 < 10 ? "0" : "") +
                (startNum + index + 1) +
                "."}
            </span>
            <span>{dis}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionComponent;
