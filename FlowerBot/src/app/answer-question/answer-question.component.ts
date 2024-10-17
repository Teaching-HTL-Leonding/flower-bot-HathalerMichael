import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpenAIResponse, OpenAIService } from '../open-ai.service';
import { MarkdownModule } from 'ngx-markdown';
import { Router, RouterLink } from '@angular/router';

export type OpenAIDialog = {
  question : string;
  answer : string;
}
@Component({
  selector: 'app-answer-question',
  standalone: true,
  imports: [FormsModule, MarkdownModule, RouterLink],
  templateUrl: './answer-question.component.html',
  styleUrl: './answer-question.component.css'
})

export class AnswerQuestionComponent {
  question = signal('');
  output = signal('');

  private readonly openAiService = inject(OpenAIService);
  private dialogues : OpenAIDialog[] = [];

  async answerQuestion(){
    if (this.dialogues.length <= 20){
      const response = await this.openAiService.answerQuestion(this.question());
      this.dialogues.push({question: this.question(), answer: response.choices[0].message.content});
      let output ='';
      this.dialogues.forEach(dialogue =>{
        output += (`User asked: ${dialogue.question} \n
        Bot answered: ${dialogue.answer} \n`);
      });
      this.output.set(output);
    }
    else{
      this.output.set('You have reached the maximum number of question in a dialogue');
    }
  }
}
