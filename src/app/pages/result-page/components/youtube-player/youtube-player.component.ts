import {Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {YoutubeService} from '../../../../services/youtube.service';
import {FunnelService} from '../../../../services/funnel.service';
import {switchMap, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {
  @ViewChild('player') player: any;
  videoId = '';
  videoIds: string[] = [];

  housingStatusAnswer = '';
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private funnelService: FunnelService, private youtubeService: YoutubeService) {
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.funnelService.answers
      .pipe(
        takeUntil(this.destroy$),
        tap(
          (answers) => {
            this.housingStatusAnswer = answers.housingStatus;
          }
        ),
        switchMap(
          () => {
            return this.youtubeService.fetchYoutubeVideos(this.housingStatusAnswer);
          }
        )
      )
      .subscribe(
        (ids) => {
          this.videoIds = ids;
          this.videoId = this.videoIds[Math.floor(Math.random() * this.videoIds.length)];
        }
      );
  }

  onReady(): void {
    this.player.mute();
    this.player.playVideo();
  }

  onStateChange(event: { data: number }): void {
    if (event.data === 0) {
      this.player.playVideo();
    }
  }
}

