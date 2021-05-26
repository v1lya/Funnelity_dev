import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultPageComponent} from './components/result-page/result-page.component';

const routes: Routes = [
  {path: '', component: ResultPageComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResultPageRoutingModule {
}
