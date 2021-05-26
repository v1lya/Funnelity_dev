import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YoutubeSearchResults} from '../models/youtube-search-results.model';
import {catchError, map} from 'rxjs/operators';
import {SnackBarService} from './snackBar.service';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class YoutubeService {

  constructor(private http: HttpClient, private snackBarService: SnackBarService) {
  }

  fetchYoutubeVideos(query: string): Observable<string[]> {
    return this.http.get<YoutubeSearchResults>(environment.API_URL, {
        params: new HttpParams({
          fromObject: {
            q: query,
            maxResult: '10',
            key: environment.API_KEY
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
