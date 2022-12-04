import { AppUrls, LanguageEnum } from "../types/Apptypes";
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
  AUTHOR_ONE,
  AUTHOR_TWO,
  AUTHOR_THREE
} from "../constants/dictionary";

 

export const NavElements = 
   
    [
      { nav_element: QUOTES_LABEL, to: AppUrls.QUOTES },
      { nav_element: SELECT_LABEL, to: AppUrls.AUTHORS },
      { nav_element: SEARCH_LABEL, to: AppUrls.SEARCH },
      { nav_element: TRANSLATE_LABEL, to: AppUrls.TRANSLATE },
      
    ]

    export const QuoteTexts = [
      {
        quote_title: QUOTE_TITLE_ONE,
        quote_content: QUOTE_CONTENT_ONE, 
        author_image:"https://images.gr-assets.com/authors/1356810912p2/5810891.jpg",
        author_name:AUTHOR_ONE
      },
      {
        quote_title: QUOTE_TITLE_TWO,
        quote_content: QUOTE_CONTENT_TWO , 
        author_image: "https://images.gr-assets.com/authors/1521044377p2/3565.jpg",
        author_name: AUTHOR_TWO
      },
      {
        quote_title: QUOTE_TITLE_THREE,
        quote_content: QUOTE_CONTENT_THREE, 
        author_image: "https://images.gr-assets.com/authors/1596216614p2/1077326.jpg",
        author_name: AUTHOR_THREE 
      }
    ]


    export const TranslateLanguages = [
      
        {
          value: "it",
          label: "Italiano",
        },
        {
          value: "en",
          label: "English",
        },

        {
          value: "af",
          label: "African",
        },
        {
          value: "ar",
          label: "Arabic",
        },
        {
          value: "hi",
          label: "Hindi",
        },
      
    ]

    export const AuthorsList = (languages: LanguageEnum) => [
      {value:AUTHOR_ONE[languages], label:AUTHOR_ONE[languages]},
      {value: AUTHOR_TWO[languages], label:AUTHOR_TWO[languages]},
      {value: AUTHOR_THREE[languages], label: AUTHOR_THREE[languages]}
    ];
     
    
    
  