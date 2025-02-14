import { Search } from "lucide-react";
import { useSearch } from "@/features/search/useSearch";

const SearchComponent = () => {
    const { query, setQuery } = useSearch();

    return (
        <div className="search">
            <div>
                <Search />
                <input
                    type="text"
                    placeholder="Search movie"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchComponent;