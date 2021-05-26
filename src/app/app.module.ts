import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {CoreModule} from './core/core.module';
import {MainPageModule} from './pages/main-page/main-page.module';
import {ResultPageModule} from './pages/result-page/result-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule,
    MainPageModule,
    ResultPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
