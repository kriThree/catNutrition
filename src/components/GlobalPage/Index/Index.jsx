import React from 'react';
import FootPage from './page/Foot/Foot';
import './index.scss'
import ProsPage from './page/Pros/Pros';
import Example from './page/Example/Example';
import ExamplePage from './page/Example/Example';
export default function IndexPage(props) {
   return (
      <>
         <main className='index__page page'>
            <FootPage />
            <ProsPage/>
            <ExamplePage/>
         </main>
      </>
   );
}