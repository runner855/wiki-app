import { AppUrls } from "../types/Apptypes";
import { QUOTE_IMAGE_THREE } from '../../.history/src/constants/dictionary_20221201102643';
import { 
  QUOTES_LABEL, 
  TRANSLATE_LABEL,
  SEARCH_LABEL,
  SELECT_LABEL, 
  QUOTE_CONTENT_ONE,
  QUOTE_CONTENT_TWO,
  QUOTE_CONTENT_THREE, 
  QUOTE_TITLE_ONE, 
  QUOTE_TITLE_TWO, 
  QUOTE_TITLE_THREE,
  QUOTE_IMAGE_ONE,
  QUOTE_IMAGE_TWO,
  QUOTE_IMAGE_THREE
} from "../constants/dictionary";

 

export const NavElements = 
   
    [
      { nav_element: QUOTES_LABEL.en, to: AppUrls.COLLAPSE },
      { nav_element: SELECT_LABEL.en, to: AppUrls.SELECT },
      { nav_element: SEARCH_LABEL.en, to: AppUrls.SEARCH },
      { nav_element: TRANSLATE_LABEL.en, to: AppUrls.TRANSLATE },
      
    ]

    export const QuoteTexts = [
      {quote_title: QUOTE_TITLE_ONE,quote_content: QUOTE_CONTENT_ONE.en, author_image:"https://images.gr-assets.com/authors/1356810912p2/5810891.jpg"},
      {quote_title: QUOTE_TITLE_TWO,quote_content: QUOTE_CONTENT_TWO.en , author_image: "https://images.gr-assets.com/authors/1521044377p2/3565.jpg"},
      {quote_title: QUOTE_TITLE_THREE,quote_content: QUOTE_CONTENT_THREE.en, author_image: "https://images.gr-assets.com/authors/1596216614p2/1077326.jpg"}
    ]
  