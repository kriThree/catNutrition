import React from 'react';
import './catalog.scss'
import MorePage from './pages/More/More';
import ProductsPage from './pages/Products/Products';
export default function CatalogPage(props) {
   return (
      <>
         <main className='catalog__page page'>
            <ProductsPage/>   
            <MorePage/>
         </main>
      </>
   )
}