import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'verb-spelling',
    pathMatch: 'full'
  },
  {
    path: 'verb-spelling',
    loadChildren: () => import('./pages/verb-spelling/verb-spelling.module').then( m => m.VerbSpellingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
