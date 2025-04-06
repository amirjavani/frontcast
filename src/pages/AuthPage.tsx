import { useState } from "react";
import {  BsEyeFill,  BsEyeSlashFill } from "react-icons/bs";
import { useThemeContext } from "../Context/ThemeProvider";

function AuthPage() {
  const [showPassLogin, setShowPassLogin] = useState(false);
  const [showPassRegister, setShowPassRegister] = useState(false);

    const {theme} = useThemeContext()

    const inputsStyle = 'border rounded p-3 my-2 mx-3 outline-none focus:border-blue-500'
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 justify-between">
      <div className="text-center">
        <h2 className="text-start text-[30px] mr-2 mb-2 md:mr-10">ورود</h2>
        <form className={`flex flex-col mx-0 md:mx-10 xl:mx-20 ${theme=='dark'?'bg-gray-500':'bg-white'} p-2 md:p-10 rounded`}>
          <div className="flex flex-col text-[18px]">
            <label className="ml-auto ">نام کاربری یا آدرس ایمیل <span className="text-red-400">*</span></label>
            <input className={inputsStyle} id="username" type="text" title="emailUsername" />
          </div>
          <div className="relative flex flex-col text-[18px]">
            <label className="ml-auto  ">گذرواژه <span className="text-red-400">*</span></label>
            <input 
                className={inputsStyle}
              id="pass"
              type={showPassLogin ? "text" : "password"}
              title="emailUsername"
            />
            <span
              className="absolute left-7 sm:left-10 bottom-6"
              onClick={() => setShowPassLogin(!showPassLogin)}>
              {showPassLogin ? <BsEyeSlashFill /> : <BsEyeFill />}
            </span>
          </div>
          <button className="mt-10 font-bold text-[20px] text-[rgb(248,249,250)] px-4 bg-[#1976D2] py-3 rounded-lg hover:bg-[#1564b3] transition-colors ">ورود</button>
        </form>
      </div>
      <div className="text-start">
        <h2>عضویت</h2>
        <form></form>
      </div>
    </div>
  );
}

export default AuthPage;
