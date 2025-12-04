import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-96 md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center px-4 border-b-4 border-green-500">
            <div className="max-w-3xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-500 mb-6 drop-shadow-lg">
                    Rick & Morty Universe
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-green-400 mb-4 font-semibold">
                    Explore the multiverse of characters, episodes, and locations
                </p>

                {/* Paragraph */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                    Dive into the crazy adventures of Rick and Morty. Discover all characters from the show, explore episodes, and learn about the different dimensions they visit.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link to={"/characters"} className="bg-green-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-green-400 transition duration-300 text-base md:text-lg">
                        Explore Characters
                    </Link>
                    <Link to={"/episodes"} className="bg-transparent border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-bold hover:bg-green-500 hover:text-gray-900 transition duration-300 text-base md:text-lg">
                        View Episodes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero