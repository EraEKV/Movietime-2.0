"use client"

import React from 'react'
import { useParams } from 'next/navigation'

const Movie = () => {
  const id = useParams().id;
  console.log(id);
  return (
    <div>Movie </div>
  )
}

export default Movie