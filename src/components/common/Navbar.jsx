import React, { useState, useEffect } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import SearchBar from './SearchBar'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchInput, setSearchInput] = useState('')


    const toggleMenu = () => setIsOpen(!isOpen)



    return (
        <nav className="bg-gray-900 shadow-lg border-b-4 border-green-500">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-green-500 hover:text-green-400">
                            Rick & Morty
                        </Link>
                    </div>

                    <SearchBar />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-gray-300 hover:text-green-500 transition font-semibold">Home</Link>
                        <Link to="/characters" className="text-gray-300 hover:text-green-500 transition font-semibold">Characters</Link>
                        <Link to="/episodes" className="text-gray-300 hover:text-green-500 transition font-semibold">Episodes</Link>
                        <Link to="/locations" className="text-gray-300 hover:text-green-500 transition font-semibold">Locations</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-500 hover:bg-gray-800"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 bg-gray-800">
                        <SearchBar />
                        {/* Mobile Links */}
                        <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold">Home</Link>
                        <Link to="/characters" className="block px-3 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold">Characters</Link>
                        <Link to="/episodes" className="block px-3 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold">Episodes</Link>
                        <Link to="/locations" className="block px-3 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold">Locations</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
