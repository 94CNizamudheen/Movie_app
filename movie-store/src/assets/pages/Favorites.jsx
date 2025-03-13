import React from "react";
import "../css/favorites.css"
import { useMovieContext } from "../contexts/movieContexts";
import MovieCard from "../Components/movieCard";

function Favorite() {
    const { favorites } = useMovieContext();
    if (favorites.length >0) {
        return (
            <div className="favorites" >
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>

        )
    }
    return (
        <div className="favorites-empty">
            <h2>No favorites movies yet</h2>
            <p>Start adding movies to your favorites and the will appear here</p>
        </div>
    )
};

export default Favorite;