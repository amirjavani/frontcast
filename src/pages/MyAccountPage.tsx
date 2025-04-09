import { BsCameraVideo } from "react-icons/bs";
import { useThemeContext } from "../Context/ThemeProvider";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { TbLogout } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import {  Navigate, NavLink, Outlet } from "react-router";
import { logout } from "../store/authSlice";

function MyAccountPage() {
  const { theme } = useThemeContext();
  const token = useAppSelector((state) => state.authentication.token);

  const dispatch = useAppDispatch()
  return (
    <>
    {!token && <Navigate to={'/auth'}/>}
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex justify-center mx-auto flex-1/3 lg:flex-2/12 flex-row flex-wrap md:flex-col gap-3">
        <NavLink to={'/my-account/downloads'}
          className={`flex justify-start p-5 rounded-lg items-center ${
            theme == "dark"
              ? "bg-gray-400 hover:bg-[#afb0b085]  active:bg-[#afb0b085] "
              : "bg-white hover:bg-[#1565c009]  active:bg-[#1565c009] "
          } text-[18px] text-[#1565c0] gap-2.5 cursor-pointer  `}>
          <BsCameraVideo className="text-5xl" />
          <span>دوره ها</span>
        </NavLink>
        <NavLink to={'/my-account/edit-account'}
          className={`flex justify-start p-5 rounded-lg items-center ${
            theme == "dark"
              ? "bg-gray-400 hover:bg-[#afb0b085] in-active:bg-[#afb0b085] "
              : "bg-white hover:bg-[#1565c009] in-active:bg-[#1565c009] "
          } text-[18px] text-[#1565c0] gap-2.5 cursor-pointer `}>
          <RiAccountCircleLine className="text-5xl" />
          <span>حساب کابری</span>
        </NavLink>
        <div
            onClick={()=>dispatch(logout())}
          className={`flex justify-start p-5 rounded-lg items-center ${
            theme == "dark"
              ? "bg-gray-400 hover:bg-[#afb0b085]"
              : "bg-white hover:bg-[#1565c009] "
          } text-[18px] text-[#1565c0] gap-2.5 cursor-pointer `}>
          <TbLogout className="text-5xl" />

          <span>خروج</span>
        </div>
      </div>
      <div
        className={`flex-2/3 ${
          theme == "dark" ? "bg-gray-400" : "bg-white"
        } text-[17px] p-7 rounded-lg`}>
        <Outlet />
      </div>
    </div>
    </>

  );
}

export default MyAccountPage;
