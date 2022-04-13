import { Injectable } from '@angular/core';
import { QUESTIONS } from '../data/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions = QUESTIONS;

  currentQuestionId: any = 0;
  currentQuestion: any = null;

  constructor() {
    this.currentQuestion = this.getCurrentQuestion();
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionId];
  }

  nextQuestion() {
    this.currentQuestion += 1;
    return this.getCurrentQuestion();
  }
}
