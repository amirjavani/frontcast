import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";


function AuthPage() {
 
  return (
    <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 justify-between">
      <LoginForm/>
      <SignUpForm/>
    </div>
  );
}

export default AuthPage;
