import React from 'react';
import Head from 'next/head';
import SignInLayoutComponent from '@/layout/SignInLayoutComponent/SignInLayout';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as styled from '../../styles/login.style';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

const Schema = yup.object({
   email: yup.string().email().required('Please enter your email'),
   password: yup
      .string()
      .required('Account password is required')
      .matches(
         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
         'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      ),
});

function Register() {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(Schema),
   });

   const onSubmit = function (data) {
      console.log(data);
   };

   return (
      <SignInLayoutComponent>
         <styled.div>
            <Head>
               <title>Register</title>
            </Head>
            <section className="flex items-center justify-center flex-col gap-5 h-full">
               <div className="text-center">
                  <p className="text-gray-500 text-3xl mb-2">Register</p>
                  <p className="text-sm text-gray-400">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Vel illo accusantium.
                  </p>
               </div>
               <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                  <div className="input_groups">
                     <div>
                        <input
                           type="email"
                           placeholder="Your email"
                           className=" border-blue-500"
                           {...register('email')}
                        />
                        {errors?.email ? (
                           <p className="text-red-500 text-sm mt-1">
                              {errors?.email?.message}
                           </p>
                        ) : null}
                     </div>
                     <div>
                        <input
                           type="password"
                           placeholder="Password"
                           className=" border-blue-500"
                           {...register('password')}
                        />
                        {errors?.password ? (
                           <p className="text-red-500 text-sm mt-1">
                              {errors?.password?.message}
                           </p>
                        ) : null}
                     </div>
                  </div>
                  <button
                     type="submit"
                     className="loginBtn bg-black w-full mt-3 p-2 rounded text-gray-100"
                  >
                     Register
                  </button>
               </form>

               <p>
                  already have account{' '}
                  <Link href={'/login'}>
                     <span className="text-sky-500 cursor-pointer">login</span>
                  </Link>
               </p>
            </section>
         </styled.div>
      </SignInLayoutComponent>
   );
}

export async function getServerSideProps({ req }) {
   const session = await getSession({ req });

   if (!!session) {
      return {
         redirect: {
            destination: '/',
         },
      };
   }

   return {
      props: {
         auth: false,
      },
   };
}

export default Register;
