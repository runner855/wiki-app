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
      {quote_one:"Be the change that you wish to see in the world. Mahatma Gandhi "},
      {quote_two: "Be yourself; everyone else is already taken.Oscar Wilde "},
      {quote_three: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.J.K. Rowling, Harry Potter and the Goblet of Fire"}
    ]
  