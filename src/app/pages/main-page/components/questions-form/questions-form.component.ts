import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FunnelService} from '../../../../services/funnel.service';
import {Questions} from '../../../../models/questions.model';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss'],
})
export class QuestionsFormComponent implements OnInit {
  activeTab = 0;
  indexOfTheLastTab: number;

  questionsData: Questions = {
    gender: {initialValue: '', options: [], questionText: '', validators: [Validators]},
    housingStatus: {initialValue: '', options: [], questionText: '', validators: [Validators]},
    yearOfBirth: {initialValue: '', options: [], questionText: '', validators: [Validators]}
  };

  questionsForm: FormGroup = new FormGroup({});

  keepOrder = (a: any, b: any) => a;


  constructor(private router: Router, private funnelService: FunnelService) {}

  ngOnInit(): void {
    this.questionsData = this.funnelService.getQuestionsData();

    Object.entries(this.funnelService.getQuestionsData()).forEach(([key, value]) => {
        this.questionsForm.setControl(key, new FormControl(value.initialValue, {validators: value.validators}));
    });

    this.indexOfTheLastTab = Object.keys(this.questionsData).length - 1;

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
    const answers = this.questionsForm.value;
    console.log(answers);
    answers.age = new Date().getFullYear() - answers.yearOfBirth;
    this.funnelService.answers.next(answers);
    this.router.navigate(['/result']);
  }
}

