import React, { useState } from 'react';
import './example.scss';
export default function ExamplePage(props) {
   const [fatCount, setFatCount] = useState(50);
   function rangeChange(e) {
      setFatCount(e.target.value);
      console.log(fatCount, Math.round(fatCount / 10) / 10)
   }


   return (
      <div className="example__page">
         <div className="example__container container" id='example'>
            <div className="example__titles">
               <h1 className="example__title">
                  Живой пример
               </h1>
               <p className="example__text">
                  Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
                  Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не
                  менял своих привычек и по-прежнему спит по 16 часов в день.
               </p>
            </div>
            <div className="example__plus">
               <div className="example__cards">
                  <div className="example__card">
                     <div>
                        <h5 className="example__card-title">
                           5 КГ
                        </h5>
                        <div className="example__card-subtitle">
                           снижение <br />
                           веса
                        </div>
                     </div>
                  </div>
                  <div className="example__card">
                     <div>
                        <h5 className="example__card-title">
                           60 ДНЕЙ
                        </h5>
                        <div className="example__card-subtitle">
                           затрачено <br />
                           времени
                        </div>
                     </div>
                  </div>
               </div>
               <div className="example__price">
                  <h6>ЗАТРАТЫ НА ПИТАНИЕ: {window.innerWidth >= 608 && window.innerWidth <= 1020 ? <br /> : ''} <span className="exapmle__price-number">15000 РУБ.</span></h6>
               </div>
            </div>
            <div className="example__scroller">
               <div className="example__cats">
                  <div
                     className="example__cat1 example__cat-card"
                     style={{ backgroundSize: `px 100%` }}>
                  </div>
                  <div
                     className="example__cat2 example__cat-card"
                     style={{ width: `${fatCount}%` }}>
                  </div>
               </div>
               <div className="example__sroller-down">
                  <h1
                     className="example__scroller-title"
                     id='example__scrolller-before'
                     style={{ borderBottom: `2px solid rgba(104,183,56,${1 - Math.round(fatCount / 10) / 10})` }}
                  >БЫЛО</h1>
                  <input className='example__controller-range'
                     type="range"
                     name="range"
                     id="cat-fat"
                     onChange={rangeChange}
                     value={fatCount}
                     min='0'
                     max='100'
                  />
                  <h1
                     className="example__scroller-title"
                     id='example__scrolller-after'
                     style={{ borderBottom: `2px solid rgba(104,183,56,${Math.round(fatCount / 10) / 10})` }}
                  >СТАЛО</h1>
               </div>
            </div>
         </div>
      </div>
   )
}