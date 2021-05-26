import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionsFormComponent} from './components/questions-form/questions-form.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../../core/core.module';
import {MainPageRoutingModule} from './main-page-routing.module';



@NgModule({
  declarations: [
    MainPageComponent,
    QuestionsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    MainPageRoutingModule
  ],
  exports: [
    MainPageComponent,
    QuestionsFormComponent
  ]
})
export class MainPageModule { }
