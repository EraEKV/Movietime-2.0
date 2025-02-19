import { Logo } from '@/shared/assets/Logo'
// import { Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className="fixed z-40 w-full">
      <nav className="w-full flex items-center justify-between bg-dark-100 px-10 py-4 fixed z-40">
        <Link href={"/"}>
          <Logo className="" />
        </Link>

        <div className="flex justify-between items-center space-x-5">
          {/* <Sun className="cursor-pointer" /> */}
          
          <div className="space-x-3 bg-white px-4 py-2 text-primary rounded-xl">
            <Link href={"/sign-in"} className="border-r-2 pr-4 border-primary" >
              Login
            </Link>

            <Link href={"/sign-up"} >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar