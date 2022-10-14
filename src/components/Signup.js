import React from 'react';
import { Link } from 'react-router-dom';
import IMDb from './icons/imdb.svg';

function Signup() {
    return (
        <>
            <div className="page">
                <div className="form-area">
                    <Link to='/' className='link'>
                        <div className="ic">
                            <img src={IMDb} alt="" className='sgn-ic' />
                        </div>
                    </Link>
                    <h2>Create Account</h2>
                    <form action="" className="signup">
                        <div></div>
                        <input type="text" placeholder='First and last name' name="" id="create-ac" />
                        <input type="email" placeholder='Your email address' name="" id="create-ac" />
                        <input type="password" placeholder='Create a password' name="" id="create-ac" />
                    </form>
                    <div className='pass-war'>
                        <ion-icon name="warning-outline">
                            Passwork must be at least 8 characters
                        </ion-icon>
                    </div>
                    <span className="check">
                        <input type="checkbox" name="Show Password" id="chk" />
                        Show Password
                    </span>
                    <span className="a-btn-innr">
                        <span className="a-btn-txt">Create your IMDb account</span>
                    </span>
                    <p className="dvdr-txt">
                        <span>
                            Already have an account?
                        </span>
                    </p>
                    <Link to='/signin' className='link'>
                        <span className="a-btn-nav">
                            <span className="a-btn-txt">Sign-In now</span>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Signup
