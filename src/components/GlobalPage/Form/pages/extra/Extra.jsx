import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import './extra.scss'
export default function ExtraPage(props) {
   const { extras } = useContext(Context);
   const { sweetener, water, milk, vitamins, } = extras;
   return (
      <div className='extra__container container'>
         <h2 className="extra__title title-line">Дополнительно</h2>
         <div className="extra__list">
            <div className="extra__item">
               <input type="checkbox" name="extra" id="sweetener" {...sweetener} className="extra__item-checbox" />
               <label htmlFor="sweetener"></label>
               <div className="extra__item-title">сахарозаменитель</div>
            </div>
            <div className="extra__item">
               <input type="checkbox" name="extra" id="water" {...water} className="extra__item-checbox" />
               <label htmlFor="water" ></label>
               <div className="extra__item-title">питьевая вода</div>

            </div>
            <div className="extra__item">
               <input type="checkbox" name="extra" id="milk" {...milk} className="extra__item-checbox" />
               <label htmlFor="milk" ></label>
               <div className="extra__item-title">молоко</div>
            </div>
            <div className="extra__item">
               <input type="checkbox" name="extra" id="vitamins" {...vitamins} className="extra__item-checbox" />
               <label htmlFor="vitamins" ></label>
               <div className="extra__item-title">витамины</div>
            </div>
            <input type="submit" value="отправить заявку" className='form__submit button' />
            <div className="extra__surely">* — Обязательные поля</div>

         </div>

      </div>
   )
}  