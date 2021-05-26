import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultPageComponent } from './component/result-page.component';
import {MaterialModule} from '../../material.module';
import {CoreModule} from '../../core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {ResultPageRoutingModule} from './result-page-routing.module';



@NgModule({
  declarations: [
    ResultPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    ResultPageRoutingModule
  ]
})
export class ResultPageModule { }
