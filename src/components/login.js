import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="hover:text-green-150"> 로그인 / 회원가입 </button>;
};

export default LoginButton;