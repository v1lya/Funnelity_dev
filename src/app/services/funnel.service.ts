import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Answers} from '../models/answers.model';
import {Validators} from '@angular/forms';
import {Questions} from '../models/questions.model';

@Injectable({providedIn: 'root'})
export class FunnelService {
  answers: BehaviorSubject<Answers> = new BehaviorSubject<Answers>({housingStatus: '', yearOfBirth: 0, age: 0, gender: ''});
  questionIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  primeNumber: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  questionsData: Questions = {
    housingStatus: {
      questionText: 'What Is Your Housing Status?',
      options: [
        {value: 'Homeless / Living in a shelter', viewValue: 'Homeless / Living in a shelter'},
        {value: 'Homeowner', viewValue: 'Homeowner'},
        {value: 'Living with family / friend', viewValue: 'Living with family / friend'},
        {value: 'Renting', viewValue: 'Renting'}
      ],
      initialValue: '',
      validators: [Validators.required],
    },
    yearOfBirth: {
      questionText: 'What Is Your Year Of Birth?',
      options: [
        {value: 2010, viewValue: 2010}
      ],
      validators: [Validators.required],
      initialValue: ''
    },
    gender: {
      questionText: 'What Is Your Gender?',
      options: [
        {value: 'Female', viewValue: 'Female'},
        {value: 'Male', viewValue: 'Male'}
      ],
      validators: [Validators.required],
      initialValue: ''
    }
  };

  getQuestionsData(): Questions {
    this.populateYearsOfBirth();
    return this.questionsData;
  }

  private populateYearsOfBirth(): void {
    for (let i = 2009; i >= 1970; i--) {
      this.questionsData.yearOfBirth.options.push(
        {value: i, viewValue: i}
      );
    }
  }

  countAmountOfLettersInAnswers(answers: Answers): number {
    return answers.housingStatus.trim().length
      + answers.gender.trim().length
      + answers.yearOfBirth.toString().length;
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
}
