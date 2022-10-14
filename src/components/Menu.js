import React from 'react';
import { Link } from 'react-router-dom';
import './styles/menu.css';
import IMDb from './icons/imdb.svg';
import Close from './icons/close.svg'
import Vid from './icons/reel.svg';
import TV from './icons/TV.svg'
import Star from './icons/star.svg';

function Menu(props) {
    return (props.trigger) ? (
        <>
            <div className="menu-cnt">
                <div className="menu-btn">
                    <Link to='/'>
                        <img src={IMDb} alt="" className='img-home' />
                    </Link>
                    <button onClick={() => props.setTrigger(false)} className='img-close-btn' type="submit">
                        <img src={Close} alt="" style={{height:'35px'}} />
                    </button>
                </div>
                <div className="category">
                    <div className="ul-items">
                        <ul>
                            <img src={Vid} alt="" className='menu-ic' />
                            Movies
                            <li>Release Calender</li>
                            <li>Top 250 Movies</li>
                            <li>Most Popular Movies</li>
                            <li>Browse Movies by Genre</li>
                            <li>Top Box Office</li>
                            <li>Showtimes & Tickets</li>
                            <li>Movie News</li>
                            <li>India Movie Spotlight</li>
                        </ul>
                        <ul>
                            <img src={TV} alt="" className='menu-ic' />
                            TV Shows
                            <li>What's on TV & Streaming</li>
                            <li>Top 250 TV Shows</li>
                            <li>Most Popular TV Shows</li>
                            <li>Browse TV Shows by Genre</li>
                            <li>TV News</li>
                            <li>India TV Spotlight</li>
                        </ul>
                        <ul>
                            <img src={Star} alt="" className='menu-ic' />
                            Awards & Events
                            <li>Oscars</li>
                            <li>Best Picture Winners</li>
                            <li>Emmys</li>
                            <li>Hispanic & Latino Voices</li>
                            <li>STARmeter Awards</li>
                            <li>San Diego Comic-Con</li>
                            <li>New York Comic-Con</li>
                            <li>SUndance Film Festival</li>
                            <li>Sundance Film Festival</li>
                            <li>Toronto Int'l Film Festival</li>
                            <li>Awards Central</li>
                            <li>Festival Central</li>
                            <li>All Events</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    ) : '';
};

export default Menu;
