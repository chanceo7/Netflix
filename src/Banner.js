import axios from './instance';
import requests from './request';
import React, { useState, useEffect } from 'react';
import './Banner.css';



function Banner(){
    const [movie, setMovie] = useState([])
    
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-2)
                ]
            )
        }
        fetchData();
    },[])

    function truncate(str,n){
        return str?.length> n? str.substr(0, n-1)+"...":str;
    }
    
    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center",
            }}
        >
        <div className="banner_content">
           <h1> {movie?.title || movie || movie?.original_name} </h1>
           <div className="button">
               <button>Play</button>
               <button>My List</button>
           </div>
           <p>
              {truncate(movie?.overview,150)}
           </p>
        </div> 
        <div className="fade"></div>

        </header>
    )

}

export default Banner;