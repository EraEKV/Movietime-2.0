"use client"

import Search from '@/shared/components/Search'
import AllMovies from '@/shared/components/sections/AllMovies';
import React from 'react'
import Image from 'next/image';


const Home = () => {
  return (
    <main className='min-h-screen'>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <Image src="/logo.svg" className="size-40"
            width={10}
            height={10}
            alt="logo"
          />

          <div className='w-32 h-40 bg-zinc-800 mx-auto'>

          </div>
          <h1>Find <span className="text-gradient">Movies</span> You will Enjoy</h1>
          <Search  />
        </header>
        
        <AllMovies />
      </div>

    </main>
  )
}

export default Home