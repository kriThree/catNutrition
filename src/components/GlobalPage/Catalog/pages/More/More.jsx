import React from 'react';
import Button from '../../button/Button';
import './more.scss';
import moreElements from './moreElements';
import gift from './gift.svg';
import backgroundMobile from './backgroundMobile.png';
import backgroundTablet from './backgroundTablet.png';
import { Link } from 'react-router-dom';

export default function MorePage(props) {
   const more = moreElements;
   return (
      <div className="more__container container">
         <div className="more__title-cont">
            <h1 className="more__title title-line">Дополнительные товары</h1>
         </div>
         <ul className="more__list">
            {more.map((item, index) => {
               return (
                  <div className="more__item" key={index}>
                     <div className="more__item-title">
                        {item.name}
                     </div>
                     <div className="more__item-size">
                        {item.size}
                     </div>
                     <div className="more__item-price">
                        {item.price} P
                     </div>
                     <Button className='more__item-link'>
                        <h1>Заказать</h1>
                     </Button>
                  </div>
               )
            })}
         </ul>
            <div className="more__gift">
               <div className="more__gift-image">
                  <img src={gift} alt="#" />
               </div>
               <div className="more__gift-title">
                  Закажите все <br />
                  и получите чехол для <br />
                  кота в подарок!
               </div>
               <div className="more__gift-background">
                  <img src={(window.innerWidth >= 420 && window.innerWidth <= 1023 ? backgroundTablet : backgroundMobile)} alt="#" />
               </div>
            </div>
      </div >
   )
}