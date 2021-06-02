import {Validators} from '@angular/forms';

export interface Option {
  value: string | number;
  viewValue: string | number;
}

export interface Question {
  questionText: string;
  options: Option[];
  initialValue: string;
  validators: [Validators];
}

export interface Questions {
  housingStatus: Question;
  yearOfBirth: Question;
  gender: Question;
}

