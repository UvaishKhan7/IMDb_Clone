import React from 'react';
import './styles/footer.css';
import FB from './icons/fb.svg';
import IG from './icons/ig.svg';
import TC from './icons/tc.svg';
import TW from './icons/tw.svg';
import YT from './icons/yt.svg';
import Launch from './icons/launch.svg';
import amazon from './icons/amazon.svg';
function Footer() {
    return (
        <>
            <div className="sm-container">
                <ul className="social-media">
                    <li className='sm-li'>
                        <img src={FB} alt="" className='sm-i' />
                    </li>
                    <li className='sm-li'>
                        <img src={IG} alt="" className='sm-i' />
                    </li>
                    <li className='sm-li'>
                        <img src={TC} alt="" className='sm-i' />
                    </li>
                    <li className='sm-li'>
                        <img src={TW} alt="" className='sm-i' />
                    </li>
                    <li className='sm-li'>
                        <img src={YT} alt="" className='sm-i' />
                    </li>
                </ul>
                <ul className='l1'>
                    <li className='l1-li'>Get the IMDb App <img src={Launch} alt="" /></li>
                    <li className='l1-li'>Help <img src={Launch} alt="" /></li>
                    <li className='l1-li'>Site Index <img src={Launch} alt="" /></li>
                    <li className='l1-li'>IMDbPro <img src={Launch} alt="" /></li>
                    <li className='l1-li'>Box Office Mojo <img src={Launch} alt="" /></li>
                    <li className='l1-li'>IMDb Developer <img src={Launch} alt="" /></li>
                </ul>
                <ul className="l2">
                    <li className='l2-li'>Press Room</li>
                    <li className='l2-li'>Advertising <img src={Launch} alt="" /></li>
                    <li className='l2-li'>Jobs <img src={Launch} alt="" /></li>
                    <li className='l2-li'>Condition of Use</li>
                    <li className='l2-li'>Privacy Policy</li>
                    <li className='l2-li'>Interest-Based Ads <img src={Launch} alt="" /></li>
                </ul>
                <div className="amzn"><img src={amazon} alt="" className='amzn-img'/></div>
                <div className="cr">© 1990-2022 by IMDb.com, Inc.</div>
            </div>
        </>
    )
}

export default Footer;
