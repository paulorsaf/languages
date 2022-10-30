export type Translation = {
    doc?: any;
    id: string;
    language: TranslationLanguage;
    translationPhrases: string[];
    original: string;
    translation: string;
}

export type TranslationLanguage = {
    from: string;
    to: string;
}