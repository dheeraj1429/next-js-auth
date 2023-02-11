import { useSession } from 'next-auth/react';
import GuestUserComponent from '@/components/GuestUserComponent/GuestUserComponent';
import * as styled from '../styles/index.style';
import UserProfileComponent from '@/components/UserProfileComponent/UserProfileComponent';

export default function Home() {
   const { data: session } = useSession();

   return (
      <styled.div>
         {!!session ? <UserProfileComponent /> : <GuestUserComponent />}
      </styled.div>
   );
}
