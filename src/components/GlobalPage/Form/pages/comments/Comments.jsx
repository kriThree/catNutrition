import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import './comments.scss'
export default function CommentsPage(props) {
   const { comments } = useContext(Context);

   return (
      <div className="comments__container container">
         <h2 className="comments__title title-line">Комментарий</h2>
         <textarea name="comments" 
         id="comm" 
         {...comments} 
         placeholder = 'Расскажите обо всех повадках кота'
         className='comments__area'
         />
      </div>
   )
}