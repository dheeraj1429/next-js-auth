import React from 'react';
import * as styled from './GuestUserComponent.style';
import Link from 'next/link';

function GuestUserComponent() {
   return (
      <styled.div className="w-full p-5 text-center">
         <p>need to login</p>
         <Link href={'/login'}>
            <p className="text-sky-500">login</p>
         </Link>
      </styled.div>
   );
}

export default GuestUserComponent;
