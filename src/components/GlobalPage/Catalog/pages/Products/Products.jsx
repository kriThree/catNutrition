import React from 'react';
import './products.scss'
import products from './productsElements';
import plus from './plus.svg'
import Button from '../../button/Button';
export default function ProductsPage(props) {

   return (
      <div className="products__container container">
         <h1 className="products__title">
            Каталог продукции
         </h1>
         <div className="products__list">
            {products.map((product, index) => {
               return (
                  <div className="products__item" key={index}>
                     <div className="products__item-image-cont">
                        <div className="products__item-image">
                           <img src={product.image} alt="image" />
                        </div>
                     </div>
                     <div className="products__item-title">
                        CAT ENERGY {window.innerWidth < 460 ? <br /> : ''}{product.title} {product.mass} Г
                     </div>
                     <ul className="products__item-characters">
                        <li>Масса <span>{product.mass}</span></li>
                        <li>Вкус <span>{product.taste}</span></li>
                        <li>Цена <span>{product.price} Р.</span></li>
                     </ul>
                     <Button className="products__item-link catalog__button">
                        <h1>Заказать</h1>
                     </Button>
                     <div className="products__item-line"></div>
                  </div>
               )

            })}
            <div className="products__item products__item-all" >
               <div className="products__all-plus">
                  <img src={plus} alt="#" />
               </div>
               <div className="products__all-title">
                  Показать еще 100500 товаров
               </div>
               <div className="products__all-subtitle">
                  На самом деле вкусов гораздо больше!
               </div>
               <Button className=" products__all-link">
                  Показать все
               </Button>
               <div className="products__item-line"></div>

            </div>
         </div>
      </div >
   )
}  