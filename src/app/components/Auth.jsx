
"use client"
import { SignIn } from '@clerk/nextjs';

const Auth = () => {
  return (
    <div className='bg-gradient-to-br from-[#f9ce34]/20 via-[#ee2a7b]/20 to-[#6228d7]/20'>
      <div className="max-w-screen-lg mx-auto">
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center">
            <div>
              <img src="banner.jpg" alt="banner image" className="lg:w-full" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5">
              <img src="logo.png" alt="logo" className="w-[200px]" />
              <p className="text-neutral-500 text-center">Welcome to pinterest-clone</p>
              <div className="mt-5">
                <SignIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth
