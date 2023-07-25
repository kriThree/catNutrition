import React, { useState } from 'react';
import Navbar from './Navbar/Navbar'
import mobileLogo1 from '../sources/logoMobile1.svg';
import mobileLogo2 from '../sources/logoMobile2.svg';
import './header.scss';
import tabletLogo1 from '../sources/tabletLogo.png';
import { Link } from 'react-router-dom'
export default function Header(props) {
   let logs = <>
      <div className="header__logo-mobile1"><Link to = {'/'}><img src={mobileLogo1} alt="No logo" /></Link></div>
      <div className="header__logo-mobile2"><Link to = {'/'}><img src={mobileLogo2} alt="No logo" /></Link></div>
   </>

   if (window.innerWidth >= 600) {
      logs = <div >
         <div className="header__logo-tablet"><img src={tabletLogo1} alt="No logo" /></div>
      </div>
   }
   return (
      <header className='header'>
         <div className="header__container container">
               {logs}
            <Navbar />
         </div>
      </header>
   )
}