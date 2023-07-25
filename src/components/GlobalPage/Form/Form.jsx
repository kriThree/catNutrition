import React, { useEffect } from 'react';
import { useState } from 'react';
import useCheckbox from '../../../hooks/useCheckbox';
import useInput from '../../../hooks/useInputs';
import useRadio from '../../../hooks/useRadio';
import { Context } from './context';
import CommentsPage from './pages/comments/Comments';
import ContactsPage from './pages/contacts/Contacts';
import ExtraPage from './pages/extra/Extra';
import SelectionPage from './pages/selection/Selection';
import { useNavigate } from 'react-router-dom';
export default function FormPage(props) {

   const navigate = useNavigate();

   const labels = {
      name: useInput(''),
      weight: useInput(''),
      age: useInput(''),
      tel: useInput(''),
      email: useInput(''),
      comments: useInput(''),
      extras: {
         sweetener: useCheckbox(true),
         water: useCheckbox(),
         milk: useCheckbox(),
         vitamins: useCheckbox(),

      },
      type: useRadio(3, 1),
      submitForm
   }

   function submitForm(e) {
      e.preventDefault();
      return navigate('/');
   }
   return (
      <Context.Provider value={labels}>
         <main className="form__page page">
            <form action="" onSubmit={submitForm}>
               <SelectionPage />
               <ContactsPage />
               <CommentsPage />
               <ExtraPage />
            </form>
         </main>
      </Context.Provider >
   )
}