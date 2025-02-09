import { useMemo } from "react";
import { useMovieStore } from "./model";
import { Movie } from "@/entities/movie/model";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface Props {
  movie: Movie;
}

export const FavoriteButton: React.FC<Props> = ({ movie }) => {
  const favorites = useMovieStore((state) => state.favorites);
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);

  const isFavorite = useMemo(
    () => favorites.some((fav) => fav.id === movie.id),
    [favorites, movie.id]
  );

  return (
    <Button
      onClick={() => toggleFavorite(movie)}
      className={cn(
        "transition-colors duration-300",
        isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-gray-500 hover:bg-gray-600"
      )}
    >
      {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    </Button>
  );
};
