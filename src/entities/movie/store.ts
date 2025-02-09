import { create } from "zustand";
import { Movie } from "./model";

interface MovieStore {
    movies: Movie[];
    page: number;
    totalPages: number;
    loading: boolean;
    error: string | null;
    setMovies: (movies: Movie[], page: number, totalPages: number) => void;
    addMovies: (movies: Movie[], page: number) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
    movies: [],
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,

    setMovies: (movies, page, totalPages) => set({ movies, page, totalPages, loading: false, error: null }),
    addMovies: (movies, page) => set((state) => ({ 
        movies: [...state.movies, ...movies], 
        page, 
        loading: false 
    })),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error, loading: false })
}));