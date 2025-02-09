export interface ApiResponse<T> {
    page: number;
    total_pages: number;
    results: T[];
}

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export interface MovieShort {
    id: number;
    original_title: string;
    original_language: string;
    vote_average: number;
    poster_path: string;
    release_date: string;
}

export type MoviesResponse = ApiResponse<Movie>;