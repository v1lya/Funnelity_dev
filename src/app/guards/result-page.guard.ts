import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {FunnelService} from '../services/funnel.service';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultPageGuard implements CanActivate {

  constructor(private funnelService: FunnelService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.funnelService.answers.pipe(
      take(1),
      map((receivedAnswers) => {
        if (((receivedAnswers.housingStatus || receivedAnswers.gender) === '') && receivedAnswers.yearOfBirth === 0) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }
      )
    );
  }
}
