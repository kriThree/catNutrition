import React from 'react';
import { useState } from 'react';
import './selection.scss';
import { Context } from '../../context';
import { useContext } from 'react';
export default function SelectionPage(props) {

   const { name, weight, age, type } = useContext(Context);

   return (
      <div className="selection__container container">
         <div className="selection__titles">
            <h1 className='selection__title'>Подбор программы</h1>
            <h2 className="selection__subtitle">
               Заполните анкету, и мы подберем <br />
               программу питания для вашего кота
            </h2>
         </div>
         <ul className="labels__list">
            <li className="labels__item">
               <label htmlFor="name" className="labels__item-title" >Имя:*</label>
               <input type="text" name="name" id="name" {...name} placeholder ='Барик' className="labels__item-input" />
            </li>

            <li className="labels__item">
               <label htmlFor="weight" className="labels__item-title">Вес(кг):*</label>
               <input type="text" name="weight" id="weight"{...weight} placeholder ='7'className='labels__item-input' />
            </li>

            <li className="labels__item">
               <label htmlFor="age" className="labels__item-title">Возраст(лет): </label>
               <input type="text" name="age" id="age"{...age}placeholder ='7' className='labels__item-input'></input>
            </li>

         </ul>

         <ul className="type__list">
            <li className="type__item">
               <div className="type__item-input-cont">
                  <input type="radio" name="radio" id="radio-1" value='radio-1' {...type.array[0]} className="type__item-input" />
                  <label htmlFor="radio-1"></label>
               </div>
               <div className="type__item-text">Похудение</div>
            </li>

            <li className="type__item">
               <div className="type__item-input-cont">
                  <input type="radio" name="radio" id="radio-2" value='radio-2'  {...type.array[1]} className="type__item-input" />
                  <label htmlFor="radio-2"></label>
               </div>
               <div className="type__item-text">Набор массы</div>

            </li>

            <li className="type__item">
               <div className="type__item-input-cont">
                  <input type="radio" name="radio" id="radio-3" value='radio-3'  {...type.array[2]} className="type__item-input" />
                  <label htmlFor="radio-3"></label>
               </div>
               <div className="type__item-text">Не знаю (Нужен ваш совет)</div>

            </li>

         </ul>
      </div >
   )
}