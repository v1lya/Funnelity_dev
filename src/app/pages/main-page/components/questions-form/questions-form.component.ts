import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FunnelService} from '../../../../services/funnel.service';
import {Question} from '../../../../models/question.model';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss'],
})
export class QuestionsFormComponent implements OnInit {
  activeTab = 0;

  housingStatuses: Question[] = [];

  yearsOfBirth: Question[] = [];

  genders: Question[] = [];

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
    this.housingStatuses = this.funnelService.getHousingStatus();
    this.yearsOfBirth = this.funnelService.getYearsOfBirth();
    this.genders = this.funnelService.getGender();

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

