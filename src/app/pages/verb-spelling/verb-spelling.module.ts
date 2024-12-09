import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerbSpellingPageRoutingModule } from './verb-spelling-routing.module';

import { VerbSpellingPage } from './verb-spelling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerbSpellingPageRoutingModule
  ],
  declarations: [VerbSpellingPage]
})
export class VerbSpellingPageModule {}
