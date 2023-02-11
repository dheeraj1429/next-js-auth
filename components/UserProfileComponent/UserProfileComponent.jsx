import React from 'react';
import * as styled from './UserProfileComponent.style';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

function UserProfileComponent() {
   const { data: session } = useSession();

   return (
      <styled.div className="w-full p-2 text-center flex justify-center">
         <div>
            <p className="text-gray-800 text-xl">{session?.user?.name}</p>
            <Image
               src={session?.user?.image}
               width={200}
               height={200}
               alt="user profile"
            />
            <p className="text-gray-600">{session?.user?.email}</p>
            <button
               onClick={() => signOut()}
               className="loginBtn bg-blue-400 w-full p-2 rounded text-gray-100 mt-2"
            >
               Sign out
            </button>
         </div>
      </styled.div>
   );
}

export default UserProfileComponent;
