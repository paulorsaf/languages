export type Verb = {
    id: string;
    language: string;
    root: string;
    rootPerfective: string;
    translation: string;
    forms: VerbForm[];
}

export type VerbForm = {
    description: string;
    conjugations: VerbConjugation[];
}

export type VerbConjugation = {
    pronoum: string;
    conjugation: string;
}