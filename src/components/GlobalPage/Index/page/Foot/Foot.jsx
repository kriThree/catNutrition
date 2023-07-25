import React from 'react';
import './foot.scss';
import foot from './foot.png';
import background from './backgroundCat.png';
import { Link } from 'react-router-dom';
import catPro from './catPro.svg';
import catSlim from './catSlim.svg';
import arrow from './arrow.svg'
export default function FootPage(props) {

   const FootImage = <div className="foot__image">
      {/* <img src={foot} alt="#" /> */}
   </div>
   const FootProgram = <div className="foot__program">
      <Link to='/catalog'>Подобрать программу</Link>
   </div>

   function getBackgroundStyle() {
      let adaptiveStyles = {};
      if (window.innerWidth >= 950) {
         adaptiveStyles = { width: '50%', left: '50%' };
      } else if (window.innerWidth >= 500) {
         adaptiveStyles = { display: 'none' };
      }
      return adaptiveStyles;
   }
   return (
      <div className="foot__page">
         <div className="foot__container container">
            <div className="foot__titles">
               <h1 className="foot__title">
                  Функциональное {window.innerWidth >= 600 ? <br /> : ''}
                  питание для котов
               </h1>
               <h4 className="foot__subtitle">
                  Занялся собой? Займись котом!
               </h4>
               {
                  window.innerWidth < 1024 && window.innerWidth >= 600
                     ? <div className="foot__down">
                        {FootImage}
                        {FootProgram}
                     </div>
                     : <>
                        {FootImage}
                        {FootProgram}
                     </>
               }
            </div>

            <div className="foot__background" style={getBackgroundStyle()}>
               <img src={background} alt="" />
            </div>

            {/* <div className="foot__list">
               <div className="foot__item">
                  <div className="foot__item-image">
                     <img src={catSlim} alt="" />
                  </div>
                  <div className="foot__item-title">
                     <h1>
                        похудение
                     </h1>
                  </div>
                  <div className="foot__item-text">
                     Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету!
                     Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
                  </div>
                  <a className="foot__item-link" to='/catalog' href='/catalog'>
                     <div>каталог slim</div>
                     <img src={arrow} alt="" />
                  </a>
               </div>
               <div className="foot__item">
                  <div className="foot__item-image">
                     <img src={catPro} alt="" />
                  </div>
                  <div className="foot__item-title">
                     <h1>
                        Набор массы
                     </h1>
                  </div>
                  <div className="foot__item-text">
                     <p>
                        Заработать авторитет среди дворовых котов и даже собак?
                        Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
                     </p>
                  </div>
                  <Link className="foot__item-link" to='/catalog'>
                     <div>каталог pro</div>
                     <img src={arrow} alt="" />
                  </Link>
               </div>
            </div> */}
         </div>
      </div>
   )
}