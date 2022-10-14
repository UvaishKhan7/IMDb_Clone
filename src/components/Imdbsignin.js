import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IMDb from './icons/imdb.svg';

function Imdbsignin(props) {
    const [value, setValue] = useState("");
    const handleClick = () => {
        if (value !== ""){
            props.setUser(value);
        }
    };
    // if(props.user){
    //     return <Navigate to='/' />
    // }
    return (
        <>
            <div className="imdb-sgnin">
                <Link to='/' className='link'>
                    <img src={IMDb} alt="" className='sgnin-imdb' />
                </Link>
                <div className="sgn-cont">
                    <h1 style={{ fontSize: '28px', fontWeight: '400', textAlign: 'left' }}>Sign in</h1>
                    <label htmlFor='email' className='label'>Email</label>
                    <input value={value} onChange={(e)=> setValue(e.target.value)} type="email" name="email" maxLength={128} />
                    <div className="psswd">
                        <label htmlFor="" className="label">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className='signin-submit' type='submit' onClick={handleClick}>Sign in</button>
                    <p className="dvdr-txt-sgn-in">
                        <span>
                            New to IMDb ?
                        </span>
                    </p>
                    <Link to='/signup' className='link'>
                        <button className='create-submit' type='submit'>Create your IMDb account</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Imdbsignin;
