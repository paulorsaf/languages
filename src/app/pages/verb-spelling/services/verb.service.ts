import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { VerbSpelling, VerbSpellingConjugation, VerbSpellingConjugationStatus } from '../types/verb-spelling.type';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
    ];

    constructor(
        private db: AngularFirestore
    ){}

    findRandom(): Observable<VerbSpelling | undefined> {
        const randomIndex = parseInt((1 + (Math.random() * 104)).toString());
        return this.db
            .collection('verbs', ref => ref.where('index', '==', randomIndex))
            .get()
            .pipe(
                map(snapshot => {
                    if (snapshot.empty) {
                        return undefined;
                    }
                    const doc = snapshot.docs[0];
                    const verb = doc.data() as VerbSpelling;
                    return {
                        id: doc.id,
                        language: verb?.language,
                        root: verb?.root,
                        rootPerfective: verb?.rootPerfective,
                        translation: verb?.translation,
                        forms: (verb.forms || []).map(form => ({
                            description: form.description,
                            conjugations: (form.conjugations || []).map(conjugation => ({
                                conjugation: conjugation.conjugation,
                                pronoum: conjugation.pronoum,
                                status: VerbSpellingConjugationStatus.NOT_SPELLED,
                            }))
                        }))
                    }
                })
            )
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