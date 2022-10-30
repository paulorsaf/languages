import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Translation } from 'src/app/model/translation';
import { StorageService } from 'src/app/services/storage/storage.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-memorize',
  templateUrl: './memorize.page.html',
  styleUrls: ['./memorize.page.scss'],
})
export class MemorizePage implements OnInit {

  currentTranslation: Translation;
  index = 0;
  isFinished = false;
  isLoading = false;
  isReverted = false;
  reveal = false;
  translations: Translation[];

  wrong: Translation[] = [];
  correct: Translation[] = [];

  constructor(
    private loadingController: LoadingController,
    private storageService: StorageService,
    private translationService: TranslationService
  ) { }

  ngOnInit() {
    this.storageService.getItem('wrong').then(wrong => {
      this.wrong = wrong ? JSON.parse(wrong) : [];
    });
    this.storageService.getItem('correct').then(correct => {
      this.correct = correct ? JSON.parse(correct) : [];
    });
    this.storageService.getItem('index').then(index => {
      this.index = index ? parseInt(index) : 0;
    });

    this.findAllTranslations();
  }

  toggleReveal() {
    this.reveal = !this.reveal;
  }

  setCorrect($event) {
    $event.stopPropagation();

    this.correct.push(this.currentTranslation);
    this.storageService.setItem('correct', JSON.stringify(this.correct));
    this.showNextWord();
  }

  setWrong($event) {
    $event.stopPropagation();

    this.wrong.push(this.currentTranslation);
    this.storageService.setItem('wrong', JSON.stringify(this.wrong));
    this.showNextWord();
  }

  seeWrongWords($event) {
    $event.stopPropagation();

    this.translations = this.wrong;
    this.storageService.setItem('translations', JSON.stringify(this.translations));
    this.resetProperties();
    this.currentTranslation = this.translations[this.index];
  }

  restart($event) {
    $event.stopPropagation();

    this.resetCacheAndRefresh();
  }

  resetCacheAndRefresh($event?) {
    this.resetProperties();
    this.storageService.removeItem('translations');
    this.findAllTranslations();

    $event?.target.complete();
  }

  private resetProperties() {
    this.reveal = false;
    this.isFinished = false;
    this.index = 0;
    this.wrong = [];
    this.correct = [];

    this.storageService.removeItem('wrong');
    this.storageService.removeItem('correct');
    this.storageService.removeItem('index');
  }

  private showNextWord() {
    this.reveal = false;
    
    if (this.index+2 > this.translations.length) {
      this.isFinished = true;
    } else {
      this.index++;
      this.currentTranslation = this.translations[this.index];
      this.storageService.setItem('index', this.index.toString());
    }
  }

  private async findAllTranslations() {
    const loading = await this.loadingController.create();
    loading.present();

    this.isLoading = true;
    this.translationService.findAll().subscribe(translations => {
      loading.dismiss();
      this.isLoading = false;
      this.translations = translations;
      this.currentTranslation = translations[this.index];
    })
  }

}
