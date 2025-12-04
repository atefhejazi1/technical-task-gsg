import React, { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="bg-gray-900 shadow-lg border-b-4 border-green-500">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-3xl font-bold text-green-500">Rick & Morty</span>
                    </div>

                    {/* Search Input - Center */}
                    <div className="hidden md:flex flex-1 mx-8 max-w-md">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search characters..."
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 border-2 border-green-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <Search className="absolute right-3 top-2.5 text-green-500" size={20} />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-300 hover:text-green-500 transition font-semibold">Characters</a>
                        <a href="#" className="text-gray-300 hover:text-green-500 transition font-semibold">Episodes</a>
                        <a href="#" className="text-gray-300 hover:text-green-500 transition font-semibold">Locations</a>
                        <a href="#" className="text-gray-300 hover:text-green-500 transition font-semibold">About</a>
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
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search characters..."
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-green-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <a href="#" className="block px-3 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold">Characters</a>
                        <a href="#" className="block px-3 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold">Episodes</a>
                        <a href="#" className="block px-3 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold">Locations</a>
                        <a href="#" className="block px-3 py-2 text-gray-300 hover:text-green-500 hover:bg-gray-700 rounded font-semibold">About</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar