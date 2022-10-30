import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslationsPageRoutingModule } from './translations-routing.module';
import { TranslationsPage } from './translations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslationsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TranslationsPage]
})
export class TranslationsPageModule {}
