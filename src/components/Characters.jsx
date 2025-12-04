import React, { useState, useEffect } from 'react'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character')
                const data = await response.json()
                setCharacters(data.results.slice(0, 6))
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchCharacters()
    }, [])

    if (loading) return <div className="text-center py-10 text-green-500">Loading characters...</div>
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>

    return (
        <section className="bg-gray-900 py-12 px-4 border-b-4 border-green-500">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-2 text-center">Characters</h2>
                <p className="text-gray-400 text-center mb-10">Explore the amazing characters from Rick and Morty</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {characters.map((character) => (
                        <div key={character.id} className="bg-gray-800 rounded-lg overflow-hidden border-2 border-green-500 hover:shadow-lg hover:shadow-green-500 transition duration-300">
                            <img src={character.image} alt={character.name} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-green-400 mb-2">{character.name}</h3>
                                <p className="text-gray-300 mb-2"><span className="font-semibold">Status:</span> {character.status}</p>
                                <p className="text-gray-300 mb-2"><span className="font-semibold">Species:</span> {character.species}</p>
                                <p className="text-gray-300"><span className="font-semibold">Location:</span> {character.location.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Characters