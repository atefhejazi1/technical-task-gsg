import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router";

const SearchBar = ({ isMobile = false }) => {
    const [searchInput, setSearchInput] = useState("");
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
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
                setResults([]);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [searchInput]);

    const goToCharacter = (id) => {
        setSearchInput("");
        setResults([]);
        setIsOpen(false);
        navigate(`/character/${id}`);
    };

    const clearSearch = () => {
        setSearchInput("");
        setResults([]);
    };

    return (
        <div className={`relative ${isMobile ? 'w-full' : 'w-full max-w-md'}`}>
            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search characters..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onFocus={() => setIsOpen(true)}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border-2 border-green-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition text-sm md:text-base"
                    />
                    <Search className="absolute right-3 top-2.5 text-green-400 pointer-events-none" size={18} />
                </div>
                
                {searchInput && (
                    <button
                        onClick={clearSearch}
                        className="p-2 text-gray-400 hover:text-green-500 transition"
                    >
                        <X size={20} />
                    </button>
                )}
            </div>

            {/* Dropdown Results */}
            {isOpen && results.length > 0 && (
                <div className={`absolute ${isMobile ? 'left-0 right-0 top-full' : 'left-0 right-0 top-full'} bg-gray-800 border-2 border-t-0 border-green-500 rounded-b-lg max-h-80 overflow-y-auto z-50 shadow-lg`}>
                    {results.slice(0, 8).map((char) => (
                        <button
                            key={char.id}
                            onClick={() => goToCharacter(char.id)}
                            className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 transition text-white border-b border-gray-700 last:border-b-0"
                        >
                            <img 
                                src={char.image} 
                                alt={char.name} 
                                className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
                            />
                            <div className="text-left">
                                <p className="font-semibold text-sm md:text-base">{char.name}</p>
                                <p className="text-xs text-gray-400">{char.species}</p>
                            </div>
                        </button>
                    ))}
                    
                    {results.length > 8 && (
                        <div className="p-3 text-center text-gray-400 text-sm">
                            +{results.length - 8} more results
                        </div>
                    )}
                </div>
            )}

            {/* No Results Message */}
            {isOpen && searchInput.trim().length >= 2 && results.length === 0 && (
                <div className="absolute left-0 right-0 top-full bg-gray-800 border-2 border-t-0 border-green-500 rounded-b-lg p-4 z-50 text-center text-gray-400">
                    No characters found for "{searchInput}"
                </div>
            )}

            {/* Backdrop when results are open on mobile */}
            {isOpen && results.length > 0 && isMobile && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default SearchBar;
