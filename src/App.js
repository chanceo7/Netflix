import logo from './logo.svg';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import './App.css'
import Nar from './Nar';
import { useEffect, useState } from 'react';
import query from 'express/lib/middleware/query';

function App() {
 
  var rowList

  const starter=()=>{
    rowList = document.querySelectorAll('.container')  
    for (var i=0; i<rowList.length ; i++){

         rowList[i].addEventListener("mouseenter",(e)=>{
             e.target.querySelector('.left').style.visibility='visible'
             e.target.querySelector('.right').style.visibility='visible'
             
          })
         rowList[i].addEventListener("mouseleave",(e)=>{
              e.target.querySelector('.left').style.visibility='hidden'
              e.target.querySelector('.right').style.visibility='hidden'   
          })
         
    }

  }
  useEffect(starter,[])
  
  
  

  return (
    <div className="App">
      <Nar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Trending now" fetchUrl={requests.fetchActionMovies}/>
    </div>
  );
}

export default App;
