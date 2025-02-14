import { tmdb } from "@/shared/api/tmdb";
import { useMovieStore } from "@/entities/movie/MovieStore";
import { MoviesResponse } from "@/entities/movie/model";

interface FetchMoviesParams {
  endpoint?: string;
  page?: number;
  language?: string;
  query?: string;
}


export const fetchMovies = async ({ endpoint = "/discover/movie", page = 1, language = "en-US" } : FetchMoviesParams ) => {
  const { setMovies, setLoading, setError } = useMovieStore.getState();
  try {
    setLoading(true);
    const { data } = await tmdb.get<MoviesResponse>(`${endpoint}?language=${language}&page=${page}`);
    setMovies(data.results, data.page, data.total_pages);
  } catch (error) {
    setError("Error fetching movies: " + error);
  }
};

export const fetchMoreMovies = async ({ endpoint = "/discover/movie", language = "en-US" } : FetchMoviesParams) => {
  const { page, totalPages, addMovies, setLoading, setError } = useMovieStore.getState();

  if (page >= totalPages) return;

  try {
    setLoading(true);
    const { data } = await tmdb.get<MoviesResponse>(`${endpoint}?language=${language}&page=${page + 1}`);
    addMovies(data.results, data.page);
  } catch (error) {
    setError("Error fetching more movies: " + error);
  }
};


export const fetchSearchMovies = async({ query, language = "en-US" }: FetchMoviesParams) => {
  const { setMovies, setLoading, setError } = useMovieStore.getState();

  try {
    setLoading(true);
    const { data } = await tmdb.get(`/search/movie?language=${language}&query=${query}`);
    setMovies(data.results, data.page, data.total_pages);
  } catch(e: unknown) {
    setError("Error fetching movies" + e);
  }
}