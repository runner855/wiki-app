export enum AppUrls  {
    COLLAPSE = "/quotes",
    SELECT = "/select",
    SEARCH = "/search",
    TRANSLATE = "/translate"
    
}

export enum  LanguageEnum {
    IT = "it",
    EN = "en"
}

export const languages : LanguageEnum = LanguageEnum.EN;

export type Label = {
    en: string,
    it: string
}