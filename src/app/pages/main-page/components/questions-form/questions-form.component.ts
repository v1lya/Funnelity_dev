import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../../../utils/my-error-state-matcher';
import {Router} from '@angular/router';
import {FunnelService} from '../../../../services/funnel.service';
import {Question} from '../../../../models/question.model';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss'],
})
export class QuestionsFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  activeTab = 0;

  housingStatuses = [
    {value: 'Homeless / Living in a shelter', viewValue: 'Homeless / Living in a shelter'},
    {value: 'Homeowner', viewValue: 'Homeowner'},
    {value: 'Living with family / friend', viewValue: 'Living with family / friend'},
    {value: 'Renting', viewValue: 'Renting'},
  ];

  yearsOfBirth: Question[] = [
    {value: 2010, viewValue: 2010}
  ];

  genders = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'}
  ];

  form: FormGroup;

  housingStatusControl = new FormControl('', {validators: [Validators.required]});
  yearOfBirthControl = new FormControl('', {validators: [Validators.required]});
  gendersControl = new FormControl('', {validators: [Validators.required]});

  constructor(private router: Router, private funnelService: FunnelService) {
    this.form = new FormGroup({
      housingStatus: this.housingStatusControl,
      yearOfBirth: this.yearOfBirthControl,
      gender: this.gendersControl
    });
  }

  ngOnInit(): void {
    this.yearsOfBirth = this.funnelService.getYearsOfBirth();
    this.funnelService.questionIndex.next(this.activeTab);
  }

  onBack(): void {
    this.activeTab -= 1;
  }

  onContinue(): void {
    this.activeTab += 1;
  }

  onChangeQuestion($event: number): void {
    this.funnelService.questionIndex.next($event);
  }

  onSubmitAnswers(): void {
    const answers = this.form.value;
    answers.age = new Date().getFullYear() - answers.yearOfBirth;
    this.funnelService.answers.next(answers);
    this.router.navigate(['/result']);
  }
}

