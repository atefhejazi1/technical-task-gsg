import React, { useState, useEffect } from 'react'

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/location')
                const data = await response.json()
                setLocations(data.results.slice(0, 6))
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchLocations()
    }, [])

    if (loading) return <div className="text-center py-10 text-green-500">Loading locations...</div>
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>

    return (
        <section className="bg-gray-800 py-12 px-4 border-b-4 border-green-500">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-2 text-center">Locations</h2>
                <p className="text-gray-400 text-center mb-10">Discover the dimensions and locations from the series</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locations.map((location) => (
                        <div key={location.id} className="bg-gray-900 rounded-lg p-6 border-2 border-green-500 hover:shadow-lg hover:shadow-green-500 transition duration-300">
                            <h3 className="text-2xl font-bold text-green-400 mb-3">{location.name}</h3>
                            <p className="text-gray-300 mb-2"><span className="font-semibold">Type:</span> {location.type}</p>
                            <p className="text-gray-300 mb-2"><span className="font-semibold">Dimension:</span> {location.dimension}</p>
                            <p className="text-gray-300"><span className="font-semibold">Residents:</span> {location.residents.length}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Locations