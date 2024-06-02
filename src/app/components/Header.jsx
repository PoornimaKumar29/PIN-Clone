"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from '@clerk/clerk-react';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import app from './../Shared/firebaseConfig';
import { HiBell, HiChat, HiSearch } from "react-icons/hi";
import { UserButton } from '@clerk/clerk-react';
import CreatePost from './create-post/CreatePost';

function Header() {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
    }
  }, [session, db]);

  const handleCreateClick = () => {
    setIsCreatePostOpen(true);
  };

  return (
    <div className='flex justify-between gap-3 md:gap-2 items-center p-6 '>
      <Image src='/logo.png' alt='logo' width={50} height={50}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />
      <button className='bg-black text-white p-2 px-4 rounded-full'>Home</button>

      <button className='font-semibold p-2 px-4 rounded-full'
        onClick={handleCreateClick}>Create</button>

      <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex'>
        <HiSearch className='text-[25px] text-gray-500' />
        <input type="text" placeholder='Search' className='bg-transparent outline-none' />
      </div>
      <HiSearch className='text=[25px] text-gray-500 md:hidden' />
      <HiBell className='text-[40px] text-gray-500' />
      <HiChat className='text-[40px] text-gray-500' />
      <UserButton />

      {/* CreatePost Dialog */}
      <CreatePost isOpen={isCreatePostOpen} setIsOpen={setIsCreatePostOpen} />
    </div>
  );
}

export default Header;
