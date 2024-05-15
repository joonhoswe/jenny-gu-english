import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

  console.log("isLoading:", isLoading);
  console.log("isAuthenticated:", isAuthenticated);
  console.log("user:", user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div className="flex flex-row space-x-1">
      <p>환영합니다, {user.name} 님</p>
      <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
    </div>
  ) : (
    <button onClick={() => loginWithRedirect()} className="hover:text-green-150">
      로그인 / 회원가입
    </button>
  );
}

export default LoginButton;

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

//     console.log("isLoading:", isLoading);
//     console.log("isAuthenticated:", isAuthenticated);
//     console.log("user:", user);

//   return <button onClick={() => loginWithRedirect()} className="hover:text-green-150"> 로그인 / 회원가입 </button>;
// };

// export default LoginButton;
