import { Star } from "lucide-react";
import { MovieShort } from "./model";
// import { FavoriteButton } from "@/features/movie/FavoriteButton";
import Image from "next/image";


export const MovieCard = ({ movie }: { movie: MovieShort }) => {
  // return (
  //   <div className="border rounded-lg p-4">
  //     <img src={movie.poster_path} alt={movie.title} className="w-full h-60 object-cover" />
  //     <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
  //     <p className="text-gray-500">{movie.genre}</p>
  //     <p className="text-yellow-500">⭐ {movie.rating}</p>
  //     <FavoriteButton movie={movie} />
  //   </div>
  // );

  return (
    <div className="movie-card cursor-pointer">
      <Image 
        src={'https://media.themoviedb.org/t/p/w220_and_h330_face/' + movie.poster_path} 
        width={220}
        height={330}
        alt={movie.original_title}
       />

       <div className="mt-4">
        <h3>{movie.original_title}</h3>

        <div className="content">
          <div className="rating">
            <Star className="text-yellow-400" />
            <p>{ movie.vote_average ? movie.vote_average.toFixed(1) : "N/A" }</p>
          </div>
          <span>·</span>
          <p className="lang">{movie.original_language}</p>

          <span>·</span>
          <p className="year">{movie.release_date}</p>
        </div>

       </div>
    </div>
  )
};
