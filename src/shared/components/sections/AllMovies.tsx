import MoviesList from '@/shared/ui/MoviesList'
import React from 'react'

const AllMovies = () => {
  return (
    <section className='all-movies'>
        <h2 className='mt-5'>Popular movies</h2>
        <div>
          <MoviesList endpoint="/movie/popular" />
        </div>
    </section>
  )
}

export default AllMovies