import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import burger from './burger.svg';
import { useLocation } from 'react-router-dom';
export default function AdaptiveNavbar() {

   const [isOpen, setIsOpen] = useState(false);
   const [isMin, setIsMin] = useState(window.innerWidth < 426);

   const location = useLocation();


   useEffect(() => {
      console.log(location.pathname)
   }, [location])

   const navbar = [
      {
         to: '/',
         title: 'Главная'
      },
      {
         to: '/catalog',
         title: 'Каталог продукции'
      },
      {
         to: '/form',
         title: 'Подбор программы'
      }
   ]
   const renderNavbar = () => {
      return (
         <nav className={'navbar__list' + (isMin ? ' navbar__list-min' : '')}>
            {navbar.map((item, index) => {
               return (
                  <li
                     className={'navbar__item'
                        + (isMin ? ' navbar__item-min' : '')
                        + (item.to === location.pathname ? ' navbar__item-active' : '')
                     }
                     key={index}>
                     <Link to={item.to} className={'navbar__item-text'
                        + (location.pathname === '/' ? ' index__navbar-text' : '')
                     }>
                        {item.title}
                     </Link>
                  </li>
               )
            })}
         </nav >
      )

   }
   const setBurger = () => setIsOpen(e => !e);


   if (window.innerWidth >= 820) {
      return (
         <>
            {renderNavbar()}
         </>
      );
   }
   return (
      <div className='navbar__burger-cont'>
         <div className="navbar__burger-button">
            <img src={burger} alt="Burger" onClick={setBurger} />
         </div>
         <div className={'navbar__burger ' + (isOpen ? 'navbar__burger-open' : 'navbar__burger-down')}>
            {renderNavbar()}
         </div>
      </div>
   )

}