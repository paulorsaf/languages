import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, LoadingController } from '@ionic/angular';
import { Translation } from 'src/app/model/translation';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.page.html',
  styleUrls: ['./translations.page.scss'],
})
export class TranslationsPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.isModalOpened) {
      const code = event.keyCode || event.which;
      if (code === 13) {
        event.preventDefault();
        this.save();
      }
    }
  }

  form: FormGroup;
  isModalOpened: boolean = false;
  perPage = 15;
  translations: Translation[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private translationService: TranslationService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      original: ['', [Validators.required]],
      phrase: ['', [Validators.required]],
      translation: ['', [Validators.required]]
    })

    this.findTranslations();
  }

  closeModal() {
    this.isModalOpened = false;
    this.form.reset();
    this.modal.dismiss(null);
  }

  async save() {
    this.form.markAllAsTouched();

    if (this.form.valid){
      const loading = await this.loadingController.create();
      loading.present();
  
      this.translationService.add({
        original: this.form.value.original,
        phrase: this.form.value.phrase,
        translation: this.form.value.translation
      })
      .then(translation => {
        this.closeModal();
        this.translations.push(translation);
      })
      .finally(() => loading.dismiss());
    }
  }

  loadMore($event) {
    this.findTranslations($event)
  }

  private findTranslations($event?) {
    const lastDoc = this.translations?.length ?
      this.translations[this.translations.length-1].doc
      : null;
      
    this.translationService.find(this.perPage, lastDoc).subscribe(translations => {
      this.translations = this.translations.concat(translations);
      $event?.target.complete();

      if (translations.length === 0) {
        $event.target.disabled = true;
      }
    })
  }

}
