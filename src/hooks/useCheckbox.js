import { useState } from "react";

export default function useCheckbox(iValue) {
   const [checked, setChecked] = useState(!!iValue || false);

   const onChange = () => {
      setChecked(!checked);
   }
   return {
      checked,
      onChange
   }

}