import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchInput.trim().length < 2) {
            setResults([]);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://rickandmortyapi.com/api/character/?name=${searchInput}`
                );
                const data = await res.json();
                setResults(data.results || []);
            } catch (err) {
                console.log(err);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [searchInput]);

    const goToCharacter = (id) => {
        setSearchInput("");
        setResults([]);
        navigate(`/character/${id}`);
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                placeholder="Search characters..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border-2 border-green-500 text-white"
            />

            <Search className="absolute right-3 top-2.5 text-green-400" size={20} />

            {results.length > 0 && (
                <div className="absolute w-full bg-gray-800 border border-green-500 rounded-lg mt-2 max-h-64 overflow-y-auto z-50">
                    {results.map((char) => (
                        <div
                            key={char.id}
                            onClick={() => goToCharacter(char.id)}
                            className="flex items-center gap-3 p-2 hover:bg-gray-700 cursor-pointer text-white"
                        >
                            <img src={char.image} alt={char.name} className="w-10 h-10 rounded-full" />
                            <span>{char.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
