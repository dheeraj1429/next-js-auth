import React from 'react';
import * as styled from './SignInLayout.style';
import Image from 'next/image';

function SignInLayoutComponent({ children }) {
   return (
      <styled.div className="flex items-center justify-center bg-sky-500">
         <styled.mainDiv className="bg-white flex">
            <styled.prevStyleImageDiv>
               <Image
                  src={
                     'https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  }
                  fill
                  alt="nature picture"
               />
            </styled.prevStyleImageDiv>
            <styled.FormGroupDiv>{children}</styled.FormGroupDiv>
         </styled.mainDiv>
      </styled.div>
   );
}

export default SignInLayoutComponent;
