import { Navigate } from "react-router";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import { useAppSelector } from "../store/hook";

function AuthPage() {
  const token =  useAppSelector((state)=>state.authentication.token)

  return (
    <>
      {token &&  <Navigate to={'/my-account'}/>}
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 justify-between">
        <LoginForm />
        <SignUpForm />
      </div>
    </>
  );
}

export default AuthPage;
