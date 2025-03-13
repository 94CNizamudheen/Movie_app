import React from "react";
import '../css/movieCard.css'
import { useMovieContext } from "../contexts/movieContexts";




function MovieCard({movie}){

    const {isFavorite,addToFavorites,removeFromFavorites} = useMovieContext();
    const favorite= isFavorite(movie.id)

    
    function faveClick(e){
        e.preventDefault();
        if(favorite){
            removeFromFavorites(movie.id);
        }else{
            addToFavorites(movie)
        }
        
    };
    return(
        <div className="movie-card">
          
            <div className="movie-poster">
                <img src={` https://www.themoviedb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`fav-btn ${favorite ? "active" : ""}`} onClick={faveClick} >♥</button>
                </div>

            </div>
            <div className="movie-info">
                <h3 className="">{movie.title}</h3>
                <p className=""> {movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
};
export default MovieCard;
