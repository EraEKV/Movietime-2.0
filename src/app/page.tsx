"use client"

import Search from '@/shared/components/Search'
import AllMovies from '@/shared/components/sections/AllMovies';
import React from 'react'


const Home = () => {
  return (
    <main className='min-h-screen'>
      <div className="pattern" />

      <div className="wrapper">
        <header className="pt-24">
          <h1>Find <span className="text-gradient">Movies</span> You will Enjoy</h1>
          <Search  />
        </header>
        
        <AllMovies />
      </div>

    </main>
  )
}

export default Home