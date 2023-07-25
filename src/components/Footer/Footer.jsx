import React from 'react';
import './footer.scss';
import bigLogo from './footerLogo.svg';
import miniLogo1 from './miniLogo1.svg';
import miniLogo2 from './miniLogo2.svg'
import miniLogo3 from './miniLogo3.svg'
import htmlAcademy from './html.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
   let width = window.innerWidth;
   let height = 362;
   return (
      <footer className='footer'>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1392.9576594515775!2d30.323658756782812!3d59.93889517248707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1652282890575!5m2!1sru!2sru"
            width={width}
            height={height}
            loading="lazy"
            className='footer__map'
         ></iframe>
         <div className="footer__container container">

            <div className="footer__down">
               <div className="footer__logo">
                  <Link to={'/'}><img src={bigLogo} alt="logo" /></Link>
               </div>
               <div className="footer__minilogs">
                  <div className="footer__minilogs-item">
                     <a href="https://vk.ru"><img src={miniLogo1} alt="" /></a>
                  </div>
                  <div className="footer__minilogs-item">
                     <a href="https://instagram.com"><img src={miniLogo2} alt="" /></a>
                  </div>
                  <div className="footer__minilogs-item">
                     <a href="https://facebook.com"><img src={miniLogo3} alt="" /></a>
                  </div>
               </div>
               <a href="https://htmlacademy.ru/">
                  <div className="footer__htmlacademylogs">
                     <div className='footer__academy-text'>HTML Academy</div>
                     <div className='footer__academy-logo'><img src={htmlAcademy} alt="html" /></div>
                  </div>
               </a>
            </div>
         </div>
      </footer>
   )
}