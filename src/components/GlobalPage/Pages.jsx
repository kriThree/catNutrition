import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './Catalog/Catalog';
import FormPage from './Form/Form';
import IndexPage from './Index/Index';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
export default function Pages() {
   
   return (
      <>
         <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/form' element={<FormPage />} />
         </Routes>
      </>
   )
}