import { Routes } from '@angular/router';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';
import { PromptComponent } from './prompt/prompt.component';

export const routes: Routes = [
  {path: '', component: AnswerQuestionComponent},
  {path: 'answer-question', component: AnswerQuestionComponent},
  {path: 'prompt', component: PromptComponent}
];
