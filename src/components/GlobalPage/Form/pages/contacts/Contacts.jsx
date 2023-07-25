import React, { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../../context';
import './contacts.scss'
export default function ContactsPage(props) {
   const { email, tel } = useContext(Context);


   return (
      <div className="contacts__container container">
         <h2 className="contacts__title title-line">
            Контактные данные <br />
            (владельца кота)
         </h2>
         <div className="contacts__list">
            <div className="contacts__item">
               <label htmlFor="email" className='contacts__item-title'>Email:*</label>
               <input type="email" {...email} id="email"  className='contacts__item-input' placeholder='kuklachev@gmail.com'/>
            </div>
            
            <div className="contacts__item">
               <label htmlFor="tel" className='contacts__item-title' >Телефон:*</label>
               <input type="tel" name="tel" id="tel" {...tel}  className = 'contacts__item-input'placeholder='8 (960) 900-60-90'/>
            </div>
         </div>
      </div>
   )
}     