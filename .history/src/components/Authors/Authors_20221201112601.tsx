import * as React, { useState} from "react";
import { QuoteTexts } from "../../Utilities/utility";
import Select from "react-select";
import { AUTHOR_ONE } from "../../constants/dictionary";



export const Authors = () => {
  const [data, setData] = useState({selected: ""})

  onChange = (e) => {
    console.log(e)
    // selected value store into state
     setState({ 
       selectedTemplates: e.target.value 
     });
   };
  return (
    
  );
};
