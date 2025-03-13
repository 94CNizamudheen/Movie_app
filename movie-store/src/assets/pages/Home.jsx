import React, { useState, useEffect } from "react";
import MovieCard from "../Components/movieCard";
import { getPooularMovies, searchMovies } from "../services/api"
import "../css/home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPooularMovies();
                setMovies(popularMovies)
            } catch (error) {
                console.log(error);
                setError("failed to Load movies....")
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies()
    }, [])


    const handleSearch= async(e)=> {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return 
        setLoading(true);
        try {
            const searchResult= await searchMovies(searchQuery);
            setMovies(searchResult);
        } catch (error) {
            console.log(error);
            setError("failed to search movies...")
        }finally{
            setLoading(false)
        }

        setSearchQuery("")
    }

    return (
        <div className="home">
            <form action="" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">search</button>
            </form>
            {error && <div className="error-message">{error}</div> }
            {loading ? <div className="loading">Loading...</div> :
                <div className="movies-grid">
                    {movies.map((movie) => (
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                        (<MovieCard movie={movie} key={movie.id} />)
                    ))}
                </div>}

        </div>
    );
}

export default Home;
