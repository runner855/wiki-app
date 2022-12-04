export enum AppUrls  {
    QUOTES = "/quotes",
    AUTHORS = "/authors",
    SEARCH = "/search",
    TRANSLATE = "/translate"
    
}

export enum  LanguageEnum {
    IT = "IT",
    EN = "EN"
}


export type Label = {
    en: string,
    it: string
}

export interface WikiDataProps {
    pageid:number;
    size:number;
    snippet:string;
    timestamp: string;
    title:string;
    wordcount:number;
}