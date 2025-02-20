import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominativeCasePage } from './nominative-case.page';

const routes: Routes = [
  {
    path: '',
    component: NominativeCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominativeCasePageRoutingModule {}
