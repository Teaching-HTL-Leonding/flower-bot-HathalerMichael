import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class promptService {

  static prompt : string = '';
  static getPrompt(): string {
    return this.prompt;
  }

  static storePrompt(prompt : string){
    this.prompt = prompt;
  }


}
