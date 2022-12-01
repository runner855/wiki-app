import  React, { useState} from "react";
import { QuoteTexts } from "../../Utilities/utility";
import Select from "react-select";
import { AUTHOR_ONE } from "../../constants/dictionary";



export const Authors = () => {
  const [data, setData] = useState({selected: ""})

  const onChange = (e) => {
    console.log(e)
    // selected value store into state
     setData({ 
       selected: e.target.value 
     });
   };
  return (
    
  );
};
