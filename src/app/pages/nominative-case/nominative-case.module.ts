import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominativeCasePageRoutingModule } from './nominative-case-routing.module';

import { NominativeCasePage } from './nominative-case.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominativeCasePageRoutingModule
  ],
  declarations: [NominativeCasePage]
})
export class NominativeCasePageModule {}
