import MoviesList from '@/shared/ui/MoviesList'
import React from 'react'

const AllMovies = () => {
  return (
    <section className='all-movies'>
        <h2 className='mt-5'>All Movies</h2>
        <div>
            <MoviesList endpoint="/movie/popular?language=en-US&page=1" />
        </div>
    </section>
  )
}

export default AllMovies