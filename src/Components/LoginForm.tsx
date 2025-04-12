import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useThemeContext } from "../Context/ThemeProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginThunk } from "../store/authSlice";
import { useAppDispatch } from "../store/hook";
import { toast } from "react-toastify";

export type LoginPayload = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [showPassLogin, setShowPassLogin] = useState(false);
  const navigator = useNavigate();
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginPayload>();

  const onLoginSubmit = async (data: LoginPayload) => {
    const res = await dispatch(loginThunk(data));

    if (loginThunk.fulfilled.match(res)) {
      console.log("Login successful:", res.payload.message);
      toast.success(`${res.payload.message}`);
      navigator(-2);
    } else {
      console.error("Login failed:", res.payload);
      toast.error(`${res.payload}`);
    }
  };

  const inputsStyle =
    "border rounded-lg p-3 my-2 mx-3 outline-none focus:border-blue-500 focus:border-2";

  return (
    <div className="text-center">
      <h2 className="text-start text-[30px] mr-2 mb-2 md:mr-10">ورود</h2>
      <form
        onSubmit={handleLoginSubmit(onLoginSubmit)}
        className={`flex flex-col mx-0 xl:mx-10 ${
          theme == "dark" ? "bg-gray-500" : "bg-white"
        } p-4 md:p-10 rounded-lg`}>
        <div className="flex flex-col text-[18px]">
          <label className="ml-auto ">
            نام کاربری یا آدرس ایمیل <span className="text-red-400">*</span>
          </label>
          <input
            className={
              inputsStyle + `${loginErrors.username ? " border-red-400" : ""}`
            }
            id="loginusername"
            type="text"
            title="نام کاربری یا آدرس ایمیل"
            {...loginRegister("username", {
              required: "این فیلد الزامی است",
              minLength: {
                value: 5,
                message: "حداقل ۵ کاراکتر وارد کنید",
              },
            })}
          />
          {loginErrors.username && (
            <p className="text-red-500 text-[12px]">
              {loginErrors.username.message}
            </p>
          )}
        </div>
        <div className="relative flex flex-col text-[18px]">
          <label className="ml-auto  ">
            گذرواژه <span className="text-red-400">*</span>
          </label>
          <input
            className={
              inputsStyle + `${loginErrors.password ? " border-red-400" : ""}`
            }
            id="loginpassword"
            type={showPassLogin ? "text" : "password"}
            title="گذرواژه "
            {...loginRegister("password", {
              required: "این فیلد الزامی است",
              minLength: {
                value: 6,
                message: "حداقل ۶ کاراکتر",
              },
              maxLength: {
                value: 15,
                message: "حداکثر ۱۵ کاراکتر",
              },
            })}
          />
          <span
            className="absolute left-7 sm:left-10 bottom-6"
            onClick={() => setShowPassLogin(!showPassLogin)}>
            {showPassLogin ? <BsEyeSlashFill /> : <BsEyeFill />}
          </span>
        </div>
        {loginErrors.password && (
          <p className="text-red-500 text-[12px]">
            {loginErrors.password.message}
          </p>
        )}
        <div className="flex mt-5 mr-2 gap-2">
          <input type="checkbox" title="مرا به خاطر بسپار" />
          <span>مرا به خاطر بسپار</span>
        </div>
        <button
          type="submit"
          className="mt-10 font-bold sm:text-[20px] text-[rgb(248,249,250)] px-4 bg-[#1976D2] py-3 rounded-lg hover:bg-[#1564b3] transition-colors ">
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
