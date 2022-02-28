
import React, { useState, useEffect } from 'react';
import axios from './instance';
import './Row.css';

const baseURl="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
    
    const [movie, setMovies]= useState([]);
    useEffect(()=>{
       async function fetchData(){
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results)
           console.log(request)
           return request
        } fetchData(); 
            
    },[fetchUrl])
    

   

    
    return (
        <div className='container' >
            <h2>{title}</h2>
            <div className="row">
                {movie.map(movie => (
                    <img 
                     key={movie.id}
                     className={`row-image ${isLargeRow && "row-image-large "}`}
                     src={`${baseURl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                     ))}
            </div>
            <div className='left' >{`<`}</div>
            <div className='right'>{`>`}</div>
        </div>
    )
}

export default Row;
