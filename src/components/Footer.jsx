import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t-4 border-green-500 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold text-green-500 mb-4">Rick & Morty</h3>
                        <p className="text-gray-400">Explore the multiverse with Rick and Morty. Discover characters, episodes, and locations from the show.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-green-500 mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-green-500 transition">Characters</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Episodes</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">Locations</a></li>
                            <li><a href="#" className="hover:text-green-500 transition">About</a></li>
                        </ul>
                    </div>

                    {/* API Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-green-500 mb-4">API</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="https://rickandmortyapi.com/" className="hover:text-green-500 transition" target="_blank" rel="noopener noreferrer">Rick & Morty API</a></li>
                            <li><a href="https://rickandmortyapi.com/documentation" className="hover:text-green-500 transition" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-green-500 mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-green-500 transition">
                                <Github size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-center text-gray-400">
                        &copy; 2025 Rick & Morty Universe. All rights reserved. | Powered by React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer