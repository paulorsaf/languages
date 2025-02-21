import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenitiveCasePageRoutingModule } from './genitive-case-routing.module';

import { GenitiveCasePage } from './genitive-case.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenitiveCasePageRoutingModule
  ],
  declarations: [GenitiveCasePage]
})
export class GenitiveCasePageModule {}
