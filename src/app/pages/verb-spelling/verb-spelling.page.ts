import { Component, OnInit } from '@angular/core';
import { VerbService } from './services/verb.service';
import { Observable, of, switchMap, take, tap } from 'rxjs';
import { VerbSpelling, VerbSpellingConjugation, VerbSpellingConjugationStatus } from './types/verb-spelling.type';
import { PopoverController } from '@ionic/angular';
import { CorrectSpellingPopoverComponent } from './components/correct-spelling-popover/correct-spelling-popover.component';

@Component({
  selector: 'app-verb-spelling',
  templateUrl: './verb-spelling.page.html',
  styleUrls: ['./verb-spelling.page.scss'],
})
export class VerbSpellingPage implements OnInit {

  hasSpelledAllVerbs = false;
  shouldReviewTranslation = false;
  spelledVerbIds: string[] = [];
  totalAmountOfVerbs?: number;
  verb?: VerbSpelling;

  constructor(
    private popoverController: PopoverController,
    private verbService: VerbService,
  ) { }

  ngOnInit() {
    this.verbService
      .findTotalAmount()
      .pipe(take(1))
      .subscribe(totalAmount => this.totalAmountOfVerbs = totalAmount);

    this.findRandomVerb()
      .subscribe(verb => this.verb = verb);
  }

  checkSpelling(input: Input, conjugation: VerbSpellingConjugation) {
    const spelling = input!.target!.value as string;
    if (!spelling) {
      conjugation.status = VerbSpellingConjugationStatus.NOT_SPELLED;
      return;
    }
    const isSpellingCorrect = this.verbService.isSpellingCorrect(
      spelling, conjugation
    );
    if (isSpellingCorrect) {
      conjugation.status = VerbSpellingConjugationStatus.CORRECT;
    } else {
      conjugation.status = VerbSpellingConjugationStatus.INCORRECT;
    }
  }

  showCorrectSpelling(event: any, conjugation: VerbSpellingConjugation) {
    this.popoverController.create({
      event,
      component: CorrectSpellingPopoverComponent,
      componentProps: {
        conjugation
      }
    })
  }

  refresh() {
    this.findRandomVerb()
      .subscribe(verb => this.verb = verb);
  }

  reviewTranslation() {
    this.shouldReviewTranslation = true;
  }

  get VerbSpellingConjugationStatus() {
    return VerbSpellingConjugationStatus;
  }

  private findRandomVerb(): Observable<VerbSpelling | undefined> {
    this.shouldReviewTranslation = false;
    return this.verbService
      .findRandom()
      .pipe(
        take(1),
        switchMap(verb => {
          if (this.spelledVerbIds.length === this.totalAmountOfVerbs) {
            this.hasSpelledAllVerbs = true;
            return of(undefined);
          }
          if (this.spelledVerbIds.some(id => verb!.id === id)) {
            return this.findRandomVerb();
          }
          this.spelledVerbIds.push(verb!.id);
          return of(verb);
        })
      );
  }

}

type Input = {
  target: {
    value?: string | number | null | undefined;
  }
};