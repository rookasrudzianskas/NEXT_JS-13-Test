'use client'
import React, {FormEvent, useState} from 'react';
import {useRouter} from "next/navigation";

const Search = ({}) => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/search?q=${search}`);
    }

    return (
        <form action="" onSubmit={handleSearch}>
            <input
                type="text"
                value={search}
                placeholder="Enter the Search Term"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit">
                Search
            </button>
        </form>
    );
};

export default Search;
// by Rokas with ❤️
