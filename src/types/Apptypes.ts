export enum AppUrls {
  QUOTES = "/quotes",
  AUTHORS = "/authors",
  SEARCH = "/search",
  TRANSLATE = "/translate",
}

export enum LanguageEnum {
  IT = "it",
  EN = "en",
}

export type Label = {
  en: string;
  it: string;
};

export interface WikiDataProps {
  pageid: number;
  size: number;
  snippet: string;
  timestamp: string;
  title: string;
  wordcount: number;
}
