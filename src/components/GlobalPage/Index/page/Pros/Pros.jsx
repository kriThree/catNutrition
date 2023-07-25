import React from 'react';
import './pros.scss';
import getProsElemnts from './prosElemnt';



export default function ProsPage(props) {

   const prosElements = getProsElemnts();
   return (
      <div className="pros__page page">
         <div className="pros__container container">
            <h1 className="pros__title">
               Как это работает
            </h1>
            <div className="pros__list">
               {prosElements.map((e, i) => {
                  return (
                     <div className="pros__item" key={i}>
                        <div className="pros__item-image">
                           <img src={e.img} alt="#" />
                        </div>
                        <div className="pros__item-text">
                           {e.text}
                        </div>
                        <div className="pros__item-number">
                           {i +1}
                        </div>
                     </div>
                  );
               })}

            </div>
         </div>
      </div>

   )
}