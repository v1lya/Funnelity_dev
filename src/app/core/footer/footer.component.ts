import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FunnelService} from '../../services/funnel.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  questionNumber: number;
  isResult = null;
  isPrimeNumber: boolean | null;

  constructor(private funnelService: FunnelService) {
  }

  ngOnInit(): void {
    this.funnelService.questionIndex
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (index) => {
          this.questionNumber = index + 1;
        }
      );

    this.funnelService.primeNumber
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (primeStatus) => {
          this.isResult = primeStatus;
          this.isPrimeNumber = primeStatus;
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
