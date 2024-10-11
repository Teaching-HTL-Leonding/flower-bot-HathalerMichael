import { Routes } from '@angular/router';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';

export const routes: Routes = [
  {path: '', component: AnswerQuestionComponent},
  {path: 'answer-question', component: AnswerQuestionComponent}
];
