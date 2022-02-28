const API_KEY="1e4a93d516b23eec019aa2564aee871f"

const requests ={
    fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=1e4a93d516b23eec019aa2564aee871f`,
    fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/movie?api_key=1e4a93d516b23eec019aa2564aee871f&with_networks=213`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=35`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=99`,
};

export default requests;