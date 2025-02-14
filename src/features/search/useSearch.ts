import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { fetchMovies, fetchSearchMovies } from "@/features/movie/fetchMovies";

export const useSearch = () => {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useDebounce(() => setDebouncedQuery(query), 700, [query]);

    useEffect(() => {
        debouncedQuery ? fetchSearchMovies({query: debouncedQuery}) : fetchMovies({language: "ru-RU"});
    }, [debouncedQuery]);

    return { query, setQuery };
};
