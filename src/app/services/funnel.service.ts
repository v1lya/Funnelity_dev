import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Answers} from '../models/answers.model';
import {Question} from '../models/question.model';

@Injectable({providedIn: 'root'})
export class FunnelService {
  answers: BehaviorSubject<Answers> = new BehaviorSubject<Answers>({housingStatus: '', yearOfBirth: 0, age: 0, gender: ''});
  questionIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  primeNumber: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  housingStatus = [
    {value: 'Homeless / Living in a shelter', viewValue: 'Homeless / Living in a shelter'},
    {value: 'Homeowner', viewValue: 'Homeowner'},
    {value: 'Living with family / friend', viewValue: 'Living with family / friend'},
    {value: 'Renting', viewValue: 'Renting'}
  ];

  yearsOfBirth = [
    {value: 2010, viewValue: 2010}
  ];

  genders = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'}
  ];

  getHousingStatus(): Question[] {
    return this.housingStatus;
  }

  getYearsOfBirth(): Question[] {
    this.populateYearsOfBirth();
    return this.yearsOfBirth;
  }

  getGender(): Question[] {
    return this.genders;
  }

  countAmountOfLettersInAnswers(answers: Answers): number {
    const lettersCounter =
      answers.housingStatus.trim().length
      + answers.gender.trim().length
      + answers.yearOfBirth.toString().length;
    return lettersCounter;
  }

  primeNumberCheck(lettersCount: number): boolean {
    for (let i = 2; i < lettersCount; i++) {
      if (lettersCount % i === 0) {
        this.primeNumber.next(false);
        return false;
      }
    }
    this.primeNumber.next(true);
    return true;
  }

  private populateYearsOfBirth(): void {
    for (let i = 2009; i >= 1970; i--) {
      this.yearsOfBirth.push(
        {value: i, viewValue: i}
      );
    }
  }
}
