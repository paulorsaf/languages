import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerbSpellingPage } from './verb-spelling.page';

const routes: Routes = [
  {
    path: '',
    component: VerbSpellingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerbSpellingPageRoutingModule {}
