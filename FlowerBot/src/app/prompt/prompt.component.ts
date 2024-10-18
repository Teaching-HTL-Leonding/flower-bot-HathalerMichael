import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { promptService } from '../prompt.service';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent {
  prompt  = signal('');
  promptService = inject(promptService);

  storePrompt(){
    promptService.storePrompt(this.prompt());
    console.log(this.prompt());
  }
}
