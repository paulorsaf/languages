import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { Translation } from 'src/app/model/translation';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(
    private db: AngularFirestore,
    private storageService: StorageService
  ) { }

  add(addTranslation: AddTranslation): Promise<Translation> {
    const language = {
      from: "PT",
      to: "DE"
    };

    return this.db
      .collection('translations')
      .add({
        language,
        original: addTranslation.original,
        translation: addTranslation.translation,
        translationPhrases: [addTranslation.phrase]
      })
      .then(snapshot => ({
        id: snapshot.id,
        language,
        original: addTranslation.original,
        translation: addTranslation.translation,
        translationPhrases: [addTranslation.phrase]
      }))
  }

  find(perPage: number, doc: any): Observable<Translation[]> {
    return new Observable<Translation[]>(observer => {
      this.db
        .collection('translations', ref =>
          ref.limit(perPage)
            .orderBy('original', 'asc')
            .startAfter(doc)
        )
        .get()
        .pipe(take(1))
        .subscribe(snapshot => {
          if (snapshot.empty) {
            observer.next([]);
          } else {
            const translations: Translation[] = snapshot.docs.map(d => {
              const data = <Translation> d.data();
              return {
                id: d.id,
                doc: d,
                ...data
              }
            })
            observer.next(translations)
          }
          observer.complete();
        })
    })
  }

  findAll(): Observable<Translation[]> {
    return new Observable<Translation[]>(observer => {
      this.storageService.getItem('translations').then(translations => {
        if (!translations) {
          this.findAllTranslations().pipe(
            switchMap(translations => of(
              translations
                .sort(() => (Math.random() > .5) ? 1 : -1)
                .sort(() => (Math.random() > .5) ? 1 : -1)
            )),
            tap(translations => this.storageService.setItem('translations', JSON.stringify(translations)))
          ).subscribe(translations => {
            observer.next(translations)
            observer.complete();
          });
        } else {
          observer.next(JSON.parse(translations));
          observer.complete();
        }
      })
    })
  }

  private findAllTranslations(): Observable<Translation[]> {
    return new Observable<Translation[]>(observer => {
      this.db
        .collection('translations')
        .get()
        .pipe(take(1))
        .subscribe(snapshot => {
          if (snapshot.empty) {
            observer.next([]);
          } else {
            const translations: Translation[] = snapshot.docs.map(d => {
              const data = <Translation> d.data();
              return {
                id: d.id,
                ...data
              }
            })
            observer.next(translations);
          }
          observer.complete();
        })
    })
  }

}

type AddTranslation = {
  original: string;
  translation: string;
  phrase: string;
}