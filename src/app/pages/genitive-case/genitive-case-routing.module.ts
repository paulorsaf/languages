import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenitiveCasePage } from './genitive-case.page';

const routes: Routes = [
  {
    path: '',
    component: GenitiveCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenitiveCasePageRoutingModule {}
