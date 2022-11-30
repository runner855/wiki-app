import { AppUrls } from "../types/Apptypes";
import { QUOTES_LABEL, TRANSLATE_LABEL,SEARCH_LABEL,SELECT_LABEL, QUOTE_ONE,QUOTE_TWO,QUOTE_THREE } from "../constants/dictionary";

 

export const NavElements = 
   
    [
      { nav_element: QUOTES_LABEL.en, to: AppUrls.COLLAPSE },
      { nav_element: SELECT_LABEL.en, to: AppUrls.SELECT },
      { nav_element: SEARCH_LABEL.en, to: AppUrls.SEARCH },
      { nav_element: TRANSLATE_LABEL.en, to: AppUrls.TRANSLATE },
      
    ]

    export const QuoteTexts = [
      {quote_title: "Quote One",quote_one: QUOTE_ONE.en},
      {quote_title: "Quote Two",quote_two: QUOTE_TWO.en},
      {quote_title: "Quote Three",quote_three: QUOTE_THREE.en}
    ]
  