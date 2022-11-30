import { AppUrls } from "../types/Apptypes";
import { COLLAPSE_LABEL, TRANSLATE_LABEL,SEARCH_LABEL,SELECT_LABEL } from "../constants/dictionary";

 

export const NavElements = 
   
    [
      { nav_element: COLLAPSE_LABEL.en, to: AppUrls.COLLAPSE },
      { nav_element: SELECT_LABEL.en, to: AppUrls.SELECT },
      { nav_element: SEARCH_LABEL.en, to: AppUrls.SEARCH },
      { nav_element: TRANSLATE_LABEL.en, to: AppUrls.TRANSLATE },
      
    ]
  