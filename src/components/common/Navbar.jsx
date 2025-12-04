import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router'
import SearchBar from './SearchBar'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="bg-gray-900 shadow-lg border-b-4 border-green-500 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl md:text-2xl font-bold text-green-500 hover:text-green-400 transition">
                            Rick & Morty
                        </Link>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden md:block flex-1 max-w-md">
                        <SearchBar isMobile={false} />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4 lg:space-x-6">
                        <Link to="/" className="text-gray-300 hover:text-green-500 transition font-semibold text-sm lg:text-base">Home</Link>
                        <Link to="/characters" className="text-gray-300 hover:text-green-500 transition font-semibold text-sm lg:text-base">Characters</Link>
                        <Link to="/episodes" className="text-gray-300 hover:text-green-500 transition font-semibold text-sm lg:text-base">Episodes</Link>
                        <Link to="/locations" className="text-gray-300 hover:text-green-500 transition font-semibold text-sm lg:text-base">Locations</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-500 hover:bg-gray-800 transition"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-green-500 bg-gray-800">
                        <div className="px-2 py-4">
                            <SearchBar isMobile={true} />
                        </div>
                        
                        <Link 
                            to="/" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold transition"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/characters" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold transition"
                        >
                            Characters
                        </Link>
                        <Link 
                            to="/episodes" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold transition"
                        >
                            Episodes
                        </Link>
                        <Link 
                            to="/locations" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold transition"
                        >
                            Locations
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
