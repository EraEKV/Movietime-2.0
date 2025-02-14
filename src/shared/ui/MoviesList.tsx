import React, { useEffect } from 'react'
import { useMovieStore } from '@/entities/movie/MovieStore'
import Loader from '@/widgets/Loader';
import { fetchMovies } from '@/features/movie/fetchMovies';
import { MovieCard } from '@/entities/movie/MovieCard';

const MoviesList = ({ endpoint  }: { endpoint: string }) => {
  const { movies, loading, error } = useMovieStore();
  
  useEffect(() => {
    fetchMovies({endpoint});
  }, [endpoint])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">Ошибка: {error}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default MoviesList