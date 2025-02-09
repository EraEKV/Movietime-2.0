import React from 'react'
import { Search } from 'lucide-react';

const SearchComponent = ({ searchInput, setSearchInput } : { searchInput: string; setSearchInput: React.Dispatch<React.SetStateAction<string>> }) => {


    return (
        <div className='search'>
            <div>
                <Search />

                <input
                    type="text"
                    placeholder='Search movie'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchComponent