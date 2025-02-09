import { create } from "zustand";
import { Movie } from "@/entities/movie/model";

interface MovieStore {
  movies: Movie[];
  favorites: Movie[];
  fetchMovies: () => Promise<void>;
  toggleFavorite: (movie: Movie) => void;
}

export const useMovieStore = create<MovieStore>((set, get) => ({
  movies: [],
  favorites: [],

  fetchMovies: async () => {
    try {
      const movies = await fetch("https://api.example.com/movies").then((res) => res.json());
      set({ movies });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  },

  toggleFavorite: (movie) => {
    const { favorites } = get();
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    set({
      favorites: isFavorite
        ? favorites.filter((fav) => fav.id !== movie.id)
        : [...favorites, movie],
    });
  },
}));
