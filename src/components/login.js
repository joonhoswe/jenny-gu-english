import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";

function LoginButton() {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div> 로딩... </div>;
  }

  return isAuthenticated ? (
    <Link href='/profile' className="flex items-center flex-row space-x-1 transition duration-300 ease-in-out hover:font-bold hover:text-green-150">
      <p> {user.name} 님 </p>
      <img src={user.picture} alt={user.name} className="w-6 h-6 rounded-full" />
    </Link>
  ) : (
    <button onClick={() => loginWithRedirect()} className="transition duration-300 ease-in-out hover:font-bold hover:text-green-150">
      로그인 / 회원가입
    </button>
  );
}

export default LoginButton;