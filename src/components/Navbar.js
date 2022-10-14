import React, { useState } from 'react';
import './styles/navbar.css';
import Search from './icons/seach.svg';
import Bookmark from './icons/bookmark.svg';
import Ham from './icons/hamburger.svg';
import Drop from './icons/drop.svg';
import { Link } from 'react-router-dom';
import IMDbPro from './icons/imdbpro.svg';
import Logo from './icons/imdb.svg';
import Menu from './Menu';

function Navbar() {
    const [popup, setPopup] = useState(false);

    return (
        <>
            <nav className="header">
                <div className="navBar">
                    <Link to='/' className='link'>
                        <button className="btn-logo">
                            <img src={Logo} alt="" className='logo-img' />
                        </button>
                    </Link>
                    <button onClick={() => setPopup(true)} className="btn" type='submit'>
                        <div className="ham">
                            <img src={Ham} alt="" className='ham-icon' />
                        </div>
                        Menu
                    </button>
                    <Menu trigger={popup} setTrigger={setPopup}>

                    </Menu>
                    <div className="search-form">
                        <div className="drop-cont">
                            <div className="drop">
                                <label htmlFor="" className="all-btn">
                                    <div className="btn-txt">All
                                        <img src={Drop} alt="" className='drop-icon' />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="input-box">
                            <input type="text" name="" placeholder='Search IMDb' id="input-text" />
                            <img className='search-icon' src={Search} alt="" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <button className="btn pro">
                        <img src={IMDbPro} alt="" height={15} className='pro-icon' />
                    </button>
                    <div className="emt"></div>
                    <Link to='/watchlist' className='link watchlist'>
                        <button className="btn">
                            <img src={Bookmark} alt="" className='bm-icon' />
                            Watchlist
                        </button>
                    </Link>
                    <Link to='/signin' className="link sgn">
                        <button type='submit' className="btn sgn-btn">
                            Sign In
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
