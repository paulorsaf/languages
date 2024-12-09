import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { verbsMock } from '../mocks/verb.mock';
import { VerbSpelling, VerbSpellingConjugation, VerbSpellingConjugationStatus } from '../types/verb-spelling.type';

@Injectable({
    providedIn: 'root'
})
export class VerbService {

    accents = [
        { accent: 'у́', replaceBy: 'у' },
        { accent: 'о́', replaceBy: 'о' },
        { accent: 'и́', replaceBy: 'и' },
        { accent: 'я́', replaceBy: 'я' },
        { accent: 'е́', replaceBy: 'е' },
        { accent: 'ю́', replaceBy: 'ю' },
        { accent: 'а́', replaceBy: 'а' },
    ]

    findById(id: string): Observable<VerbSpelling | undefined> {
        const verb = verbsMock.find(verb => verb.id === id);
        return of(verb ? {
            id: verb?.id,
            language: verb?.language,
            root: verb?.root,
            translation: verb?.translation,
            forms: (verb.forms || []).map(form => ({
                description: form.description,
                conjugations: (form.conjugations || []).map(conjugation => ({
                    conjugation: conjugation.conjugation,
                    pronoum: conjugation.pronoum,
                    status: VerbSpellingConjugationStatus.NOT_SPELLED,
                }))
            }))
        } : undefined);
    }

    findRandom(): Observable<VerbSpelling | undefined> {
        const random = Math.floor(Math.random() * verbsMock.length);
        const verb = verbsMock[random];
        return of(verb ? {
            id: verb?.id,
            language: verb?.language,
            root: verb?.root,
            translation: verb?.translation,
            forms: (verb.forms || []).map(form => ({
                description: form.description,
                conjugations: (form.conjugations || []).map(conjugation => ({
                    conjugation: conjugation.conjugation,
                    pronoum: conjugation.pronoum,
                    status: VerbSpellingConjugationStatus.NOT_SPELLED,
                }))
            }))
        } : undefined);
    }

    findTotalAmount(): Observable<number> {
        return of(verbsMock.length);
    }

    isSpellingCorrect(spelling: string, conjugation: VerbSpellingConjugation): boolean {
        let conjugationWithoutAccent = conjugation.conjugation;
        this.accents.forEach(accent => {
            conjugationWithoutAccent = conjugationWithoutAccent
                .replace(accent.accent, accent.replaceBy);
        });

        if (spelling === conjugationWithoutAccent) {
            return true;
        }
        return false;
    }

}