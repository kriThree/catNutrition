import { useEffect, useState } from "react";

export default function useInput(iValue, ) {
   const [value, setValue] = useState(iValue);

   const onChange = event => {
      setValue(event?.target?.value || '');
   }


   return {
      value,
      onChange,
   }

}