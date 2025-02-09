import { tmdb } from "@/shared/api/tmdb";
import { useMovieStore } from "@/entities/movie/store";
import { MoviesResponse } from "@/entities/movie/model";

export const fetchMovies = async (endpoint: string, page = 1) => {
  const { setMovies, setLoading, setError } = useMovieStore.getState();

  try {
      setLoading(true);
      const { data } = await tmdb.get<MoviesResponse>(`${endpoint}?page=${page}`);
      setMovies(data.results, data.page, data.total_pages);
  } catch (error) {
      setError("Error fetching movies");
  }
};

export const fetchMoreMovies = async (endpoint: string) => {
  const { page, totalPages, addMovies, setLoading, setError } = useMovieStore.getState();

  if (page >= totalPages) return;

  try {
      setLoading(true);
      const { data } = await tmdb.get<MoviesResponse>(`${endpoint}?page=${page + 1}`);
      addMovies(data.results, data.page);
  } catch (error) {
      setError("Error fetching more movies");
  }
};