import React from 'react';
import './styles/signin.css';
import imdbIcon from './icons/icon-imdb.png';
import appleIcon from './icons/icon-apple.png';
import amazonIcon from './icons/icon-amazon.png';
import googleIcon from './icons/icon-google.png';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <>
            <div className="sg-cnt">
                <div className="options">
                    <h1 className='heading'>Sign in</h1>
                    <Link to='/imdbsignin' className='link'>
                        <a href="/" className='btn-box'>
                            <img src={imdbIcon} alt="" className='signing-icon' />
                            Sign in with IMDb
                        </a>
                    </Link>
                    <a href="/https://na.account.amazon.com/ap/signin?_encoding=UTF8&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.pape.max_auth_age=0&ie=UTF8&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_lwa_na&marketPlaceId=ATVPDKIKX0DER&arb=8f4594fb-dcbc-4167-b792-242c8fa1f539&language=en_US&openid.return_to=https%3A%2F%2Fna.account.amazon.com%2Fap%2Foa%3FmarketPlaceId%3DATVPDKIKX0DER%26arb%3D8f4594fb-dcbc-4167-b792-242c8fa1f539%26language%3Den_US&enableGlobalAccountCreation=1&metricIdentifier=amzn1.application.eb539eb1b9fb4de2953354ec9ed2e379&signedMetricIdentifier=fLsotU64%2FnKAtrbZ2LjdFmdwR3SEUemHOZ5T2deI500%3D" className='btn-box'>
                        <img src={amazonIcon} alt="" className='signing-icon' />
                        Sign in with Amazon
                    </a>
                    <a href="/https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&access_type=offline&redirect_uri=https%3A%2F%2Fwww.imdb.com%2Fap%2F3p_callback%3FidentityProvider%3DGOOGLE%26relyingParty%3DIMDbPool%26request%3Dsignin%26openid.assoc_handle%3Dimdb_google%26openid.mode%3Dcheckid_setup%26openid.ns%3Dhttp%253A%252F%252Fspecs.openid.net%252Fauth%252F2.0%26openid.return_to%3Dhttps%253A%252F%252Fwww.imdb.com%2Fap-signin-handler&state=c4f870ae-c4d6-4ac9-b58d-a148d936ead8.fUeVEhwguG8-9DUAySGooPCcP7pIxPU1NeaYDiwWrS4%3D&client_id=118778695955-4inip14ellc053slc8e3aebndgcfo3p9.apps.googleusercontent.com&scope=email%20profile&flowName=GeneralOAuthFlow" className='btn-box'>
                        <img src={googleIcon} alt="" className='signing-icon' />
                        Sign in with Google
                    </a>
                    <a href="/https://appleid.apple.com/auth/authorize?response_type=code+id_token&redirect_uri=https%3A%2F%2Fwww.imdb.com%2Fap%2F3p_callback%3FidentityProvider%3DAPPLE%26relyingParty%3DIMDbPool%26request%3Dsignin%26openid.assoc_handle%3Dimdb_apple%26openid.mode%3Dcheckid_setup%26openid.ns%3Dhttp%253A%252F%252Fspecs.openid.net%252Fauth%252F2.0%26openid.return_to%3Dhttps%253A%252F%252Fwww.imdb.com%252Fregistration%252Fap-signin-handler%252Fimdb_apple&state=da0c1fae-5546-4cc3-937a-510713f7b5dd.KuLsiqrgBNeyZNhVzKEXipMBfuZnRQA9e_Gyymiw2Xs%3D&client_id=com.imdb.imdb.service&scope=name+email&response_mode=form_post" className='btn-box'>
                        <img src={appleIcon} alt="" className='signing-icon' />
                        Sign in with Apple
                    </a>
                    <p className="divider-text">
                        <span>
                            or
                        </span>
                    </p>
                    <Link to='/signup' className='link'>
                        <div className="create">Create New Acoount</div>
                    </Link>
                    <div id="signin-notice">
                        <p className="text-center">
                            <small>By signing in, you agree to IMDb's
                                <br />
                                <a href="/conditions"> Conditions of Use </a>
                                and
                                <a href="/privacy"> Privacy Policy </a>
                                .
                            </small>
                        </p>
                    </div>
                </div>
                <div id="signin-perks">
                    <h1 className='heading2'>Benefits of your free IMDb account</h1>
                    <p><strong>Personalized Recommendations</strong><br />Discover shows you'll love.</p>
                    <p><strong>Your Watchlist</strong><br />Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                    <p><strong>Your Ratings</strong><br />Rate and remember everything you've seen.</p>
                    <p><strong>Contribute to IMDb</strong><br />Add data that will be seen by millions of people and get cool badges.</p>

                </div>
            </div>
        </>
    )
}

export default Signin;
