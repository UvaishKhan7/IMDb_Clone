import React from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w500/";
function TrendingList({ title, popularity, poster_path, overview }) {
  return (
    <>
      <div className='movie-tile'>
        <h5>{title}</h5>
        <img src={API_IMG + poster_path} alt="" height={300} />
        <h6>Popularity : {popularity}</h6>
        <p> 
          <strong>
            Overview:
            </strong>  {overview}</p>
      </div>
    </>
  )
}

export default TrendingList;
