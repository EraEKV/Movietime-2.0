import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className="font-bold text-center">
        <p className='text-5xl mb-6'>😞</p>
        <h1 className='text-2xl mb-5'>Page not found </h1>

        <div className="flex justify-center">
          <Link className='text-xl font-semibold px-4 py-2 border-focus border-[2px] bg-focusrounded-lg' href='/'>Главная</Link>
        </div>
      </div>
    </div>

  )
}

export default NotFound