export type VerbSpelling = {
    id: string;
    forms: VerbSpellingForm[];
    language: string;
    root: string;
    translation: string;
}

export type VerbSpellingForm = {
    conjugations: VerbSpellingConjugation[];
    description: string;
}

export type VerbSpellingConjugation = {
    conjugation: string;
    pronoum: string;
    status: VerbSpellingConjugationStatus;
}

export enum VerbSpellingConjugationStatus {
    CORRECT,
    INCORRECT,
    NOT_SPELLED
}