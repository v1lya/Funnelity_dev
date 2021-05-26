import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FunnelService} from '../../../services/funnel.service';
import {takeUntil} from 'rxjs/operators';
import {Answers} from '../../../models/answers.model';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  answers: Answers = {housingStatus: '', yearOfBirth: 0, age: 0, gender: ''};

  constructor(private funnelService: FunnelService) {
  }

  ngOnInit(): void {
    this.funnelService.answers
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (receivedAnswers) => {
          this.answers = receivedAnswers;
        }
      );

    this.funnelService.primeNumberCheck(this.funnelService.countAmountOfLettersInAnswers(this.answers));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.funnelService.primeNumber.next(null);
  }
}
