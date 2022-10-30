import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [{
  path: '',
  component: HomePage,
  children: [{
    path: 'translations',
    loadChildren: () => import('./../translations/translations.module').then( m => m.TranslationsPageModule)
  }, {
    path: 'memorize',
    loadChildren: () => import('./../memorize/memorize.module').then( m => m.MemorizePageModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
