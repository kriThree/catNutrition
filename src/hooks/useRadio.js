import { useState } from "react";

export default function useRadio(length, iValue) {
   const [value, setValue] = useState(iValue);
   const array = new Array(length).fill('').map((_, i) => {

      return {
         onChange: event => {
            setValue(i + 1);
         },
         checked: value === i + 1
      }
   })

   return {
      value,
      array
   }

}