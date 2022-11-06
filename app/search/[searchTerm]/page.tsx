import React from 'react';

type PageProps = {
    params: {
        searchTerm: string;
    }
}

type SearchResults = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ]
}

const Search = async (searchTerm: string) => {
    const response = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`);
    const data = await response.json();
    return data;
}

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
    const searchResults = await Search(searchTerm)
    return (
        <div>

        </div>
    );
};

export default SearchResults;
// by Rokas with ❤️
