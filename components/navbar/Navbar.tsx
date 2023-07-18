import React from 'react'
import Logo from '../logo/Logo'
import { BsPlusLg, BsFilter,BsHeartFill,BsCart2 ,BsPersonFill } from "react-icons/bs";
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className='fixed z-50 top-0 left-0 px-5 py-2 w-full backdrop:blur-sm bg-gradient-to-b from-customblack/70 to-transparent'>
      <div className='flex flex-row justify-between'>
        <div> <Link href="/admin/home"><Logo withBrandname={true} color="text-white" /></Link></div>
        <div className='px-5 flex flex-row gap-5 items-center justify-center'><Link href="/admin/cart" className='relative'><BsCart2 className='text-white text-2xl' /><div className='absolute -top-1 -right-2 bg-white p-2 rounded-full h-4 w-4 flex justify-center items-center text-xs font-medium'>1</div></Link><button className='hover:bg-darkviolet/30 border py-1 px-4 text-white rounded-lg flex flex-row gap-2 items-center justify-center'><BsPersonFill className='text-lg' /><span>Login</span></button></div>
      </div>

    </div>
  )
}
