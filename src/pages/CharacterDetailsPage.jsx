import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const CharacterDetailsPage = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                const data = await response.json()
                setCharacter(data)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchCharacter()
    }, [id])

    if (loading) return (
        <div>
            <Navbar />
            <div className="bg-gray-900 min-h-screen flex items-center justify-center">
                <p className="text-green-500 text-xl">Loading character details...</p>
            </div>
            <Footer />
        </div>
    )

    if (error) return (
        <div>
            <Navbar />
            <div className="bg-gray-900 min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl">Error: {error}</p>
            </div>
            <Footer />
        </div>
    )

    return (
        <div>
            <Navbar />
            <div className="bg-gray-900 min-h-screen py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link to="/characters" className="text-green-500 hover:text-green-400 mb-6 inline-block font-semibold">
                        ← Back to Characters
                    </Link>

                    {/* Character Details */}
                    <div className="bg-gray-800 rounded-lg border-2 border-green-500 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                            {/* Image */}
                            <div>
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="w-full rounded-lg border-2 border-green-500"
                                />
                            </div>

                            {/* Details */}
                            <div>
                                <h1 className="text-5xl font-bold text-green-500 mb-6">{character.name}</h1>

                                <div className="space-y-4 text-gray-300">
                                    <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-gray-400">Status</p>
                                        <p className="text-xl font-semibold text-green-400">{character.status}</p>
                                    </div>

                                    <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-gray-400">Species</p>
                                        <p className="text-xl font-semibold text-green-400">{character.species}</p>
                                    </div>

                                    <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-gray-400">Gender</p>
                                        <p className="text-xl font-semibold text-green-400">{character.gender}</p>
                                    </div>

                                    <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-gray-400">Type</p>
                                        <p className="text-xl font-semibold text-green-400">{character.type || 'Unknown'}</p>
                                    </div>

                                    <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-gray-400">Location</p>
                                        <p className="text-xl font-semibold text-green-400">{character.location.name}</p>
                                    </div>

                                    <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-sm text-gray-400">Origin</p>
                                        <p className="text-xl font-semibold text-green-400">{character.origin.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Episodes Section */}
                        <div className="border-t-2 border-green-500 p-8">
                            <h2 className="text-3xl font-bold text-green-500 mb-6">Episodes ({character.episode.length})</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {character.episode.slice(0, 12).map((episodeUrl, index) => (
                                    <div key={index} className="bg-gray-700 p-4 rounded-lg border border-green-500">
                                        <p className="text-green-400 font-semibold">{episodeUrl.split('/').pop()}</p>
                                    </div>
                                ))}
                            </div>
                            {character.episode.length > 12 && (
                                <p className="text-gray-400 mt-4">+ {character.episode.length - 12} more episodes</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CharacterDetailsPage