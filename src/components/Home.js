import React, { useState, useEffect } from 'react';
import MovieBox from './TrendingList';
import './styles/home.css';

const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=343a914b3ee9a7f50d294abf4a479853";
function Home() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                setTrending(data.results);
            });
    }, []);
    return (
        <>
            <div className="home-container">
                <div>
                    <h3>
                        Top box office (US) &gt;
                    </h3>
                </div>

                <div className='movie-box-container'>
                    {trending?.map((movieReq) =>
                        <MovieBox key={movieReq.id} {...movieReq} />)}
                </div>
        </div>
        </>
    )
};

export default Home;
