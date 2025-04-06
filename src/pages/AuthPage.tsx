import LoginForm from "../Components/LoginForm";


function AuthPage() {
 
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 justify-between">
      <LoginForm/>
      <div className="text-start">
        <h2>عضویت</h2>
        <form></form>
      </div>
    </div>
  );
}

export default AuthPage;
