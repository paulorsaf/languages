import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslationsPage } from './translations.page';

const routes: Routes = [
  {
    path: '',
    component: TranslationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslationsPageRoutingModule {}
