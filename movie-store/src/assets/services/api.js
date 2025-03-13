

const API_KEY = "47d53155114bb22c612ca2555730d894";
const BASE_URL="https://api.themoviedb.org/3"

export const getPooularMovies= async()=>{
    const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&with_original_language=ml&sort_by=popularity.desc`);
    const data= await response.json();
    return data.results;

};
export const searchMovies= async(query)=>{
    const response= await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    

    const data= await response.json();
    return data.results;

};