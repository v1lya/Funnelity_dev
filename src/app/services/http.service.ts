import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyCtgMbiiiZryN_ogEFLvICMqoPZ77C_ru0';

  constructor(private http: HttpClient) {
  }

  fetchYoutubeVideos(query: string): Observable<object> {
    return this.http.get(this.API_URL, {
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
        // (result: YoutubeVideoModel) => {
        //   const videos: [] = result.items.forEach(
        //     (item) => {
        //       videos.push(item.id.videoId);
        //     }
        //   );
        //   return videos;
        // }
      );
  }
}
