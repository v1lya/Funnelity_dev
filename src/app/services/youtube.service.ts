import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YoutubeSearchResults} from '../models/youtube-search-results.model';
import {catchError, map} from 'rxjs/operators';
import {SnackBarService} from './snackBar.service';

@Injectable({providedIn: 'root'})
export class YoutubeService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyCtgMbiiiZryN_ogEFLvICMqoPZ77C_ru0';

  constructor(private http: HttpClient, private snackBarService: SnackBarService) {
  }

  fetchYoutubeVideos(query: string): Observable<string[]> {
    return this.http.get<YoutubeSearchResults>(this.API_URL, {
        params: new HttpParams({
          fromObject: {
            q: query,
            maxResult: '10',
            key: this.API_TOKEN
          }
        })
      }
    )
      .pipe(
        map(
          (result: YoutubeSearchResults) => {
            return this.getVideoIds(result);
          }
        ),
        catchError(
          () => {
            this.snackBarService.showSnackbar('Could not fetch YouTube video');
            return [];
          }
        )
      );
  }

  private getVideoIds(result: YoutubeSearchResults): string[] {
    const videoIds: string[] = [];

    result.items.forEach(
      (item) => {
        videoIds.push(item.id.videoId);
      });
    return videoIds;
  }
}
