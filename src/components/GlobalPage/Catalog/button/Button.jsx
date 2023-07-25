import React from 'react';
import './button.scss'
export default function Button({ children, className }) {
   return (
      <button className={'catalog__button ' + className}>
         {children}
      </button>
   )
}