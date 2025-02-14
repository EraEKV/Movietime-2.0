import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { fetchMovies, fetchSearchMovies } from "@/features/movie/fetchMovies";

export const useSearch = () => {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useDebounce(() => setDebouncedQuery(query), 700, [query]);

    useEffect(() => {
        if (debouncedQuery) {
            fetchSearchMovies({ query: debouncedQuery });
        } else {
            fetchMovies({});
        }
    }, [debouncedQuery]);

    return { query, setQuery };
};
