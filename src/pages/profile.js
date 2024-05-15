import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Logout from '@components/logout';

export default function Profile() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div> 로딩... </div>;
  }

  return isAuthenticated ? (
    <div className='h-screen w-screen bg-white flex-col space-y-4 text-black p-8'>
        <div className='flex flex-row space-x-3 w-full items-center'>
          <img src={user.picture} alt={user.name} className="w-16 h-16 rounded-full" />
          <p> 환영합니다, {user.name} 님 </p>
        </div>
        <Logout />
    </div>
  ) : (<div> error </div>);
}