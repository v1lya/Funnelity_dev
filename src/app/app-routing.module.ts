import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ResultPageGuard} from './guards/result-page.guard';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)},
  {path: 'result', loadChildren: () => import('./pages/result-page/result-page.module').then(m => m.ResultPageModule),
    // canActivate: [ResultPageGuard]
  },
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top',
    relativeLinkResolution: 'corrected',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
