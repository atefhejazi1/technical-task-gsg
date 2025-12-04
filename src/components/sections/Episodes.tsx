import  { useState, useEffect, FC } from 'react'

interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

interface ApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Episode[];
}

const Episodes: FC = () => {
    const [episodes, setEpisodes] = useState<Episode[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchEpisodes = async (): Promise<void> => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/episode')
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data: ApiResponse = await response.json()
                
                if (data.results && Array.isArray(data.results)) {
                    setEpisodes(data.results.slice(0, 6))
                } else {
                    throw new Error("Invalid data structure received from API")
                }
                
                setLoading(false)
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
                setError(errorMessage)
                setLoading(false)
            }
        }
        fetchEpisodes()
    }, [])

    if (loading) return <div className="text-center py-10 text-green-500">Loading episodes...</div>
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>

    return (
        <section className="bg-gray-900 py-12 px-4 border-b-4 border-green-500">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-2 text-center">Episodes</h2>
                <p className="text-gray-400 text-center mb-10">Watch the best episodes from the series</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {episodes.map((episode) => (
                        <div key={episode.id} className="bg-gray-800 rounded-lg p-6 border-2 border-green-500 hover:shadow-lg hover:shadow-green-500 transition duration-300">
                            <h3 className="text-xl font-bold text-green-400 mb-3">{episode.name}</h3>
                            <p className="text-gray-300 mb-2"><span className="font-semibold">Episode:</span> {episode.episode}</p>
                            <p className="text-gray-300 mb-2"><span className="font-semibold">Air Date:</span> {episode.air_date}</p>
                            <p className="text-gray-300"><span className="font-semibold">Characters:</span> {episode.characters.length}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Episodes