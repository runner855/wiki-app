import { AppUrls } from "../types/Apptypes";
import { QUOTES_LABEL, TRANSLATE_LABEL,SEARCH_LABEL,SELECT_LABEL } from "../constants/dictionary";

 

export const NavElements = 
   
    [
      { nav_element: QUOTES_LABEL.en, to: AppUrls.COLLAPSE },
      { nav_element: SELECT_LABEL.en, to: AppUrls.SELECT },
      { nav_element: SEARCH_LABEL.en, to: AppUrls.SEARCH },
      { nav_element: TRANSLATE_LABEL.en, to: AppUrls.TRANSLATE },
      
    ]

    export const QuoteTexts = [
      {quote_one:"Be the change that you wish to see in the world. Mahatma Gandhi "}
    ]
  