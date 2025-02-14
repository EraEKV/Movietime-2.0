import { Star } from "lucide-react";
import { MovieShort } from "./model";
// import { FavoriteButton } from "@/features/movie/FavoriteButton";
import Image from "next/image";
import Link from "next/link";


export const MovieCard = ({ 
  id,
  original_language: lang, 
  original_title: title,
  vote_average: rating,
  release_date: date,
  poster_path: poster  
}: MovieShort) => {

  return (
    <Link href={"/movies/" + id} className="movie-card">
      <Image 
        src={'https://media.themoviedb.org/t/p/w220_and_h330_face/' + poster} 
        width={220}
        height={330}
        alt={title}
       />

       <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <Star className="text-yellow-400" />
            <p>{ rating ? rating.toFixed(1) : "N/A" }</p>
          </div>
          <span>·</span>
          <p className="lang">{lang}</p>

          <span>·</span>  
          <p className="year">{date}</p>
        </div>

       </div>
    </Link>
  )
};
