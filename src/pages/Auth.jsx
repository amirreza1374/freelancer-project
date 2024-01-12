import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="bg-secondary-0 h-screen">
      <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <AuthContainer />
      </div>
    </div>
    </div>
  );
}

export default Auth;
