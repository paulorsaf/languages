import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'verb-spelling',
    loadChildren: () => import('./pages/verb-spelling/verb-spelling.module').then( m => m.VerbSpellingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'nominative-case',
    loadChildren: () => import('./pages/nominative-case/nominative-case.module').then( m => m.NominativeCasePageModule)
  },
  {
    path: 'genitive-case',
    loadChildren: () => import('./pages/genitive-case/genitive-case.module').then( m => m.GenitiveCasePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
