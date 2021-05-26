import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultPageComponent} from './components/result-page/result-page.component';
import {MaterialModule} from '../../material.module';
import {CoreModule} from '../../core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {ResultPageRoutingModule} from './result-page-routing.module';
import {YoutubePlayerComponent} from './components/youtube-player/youtube-player.component';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  declarations: [
    ResultPageComponent,
    YoutubePlayerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    ResultPageRoutingModule,
    YouTubePlayerModule
  ]
})
export class ResultPageModule {
}
