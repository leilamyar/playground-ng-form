import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QUESTIONS } from 'src/app/data/questions';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-draft-form-ndz',
  templateUrl: './draft-form-ndz.component.html',
  styleUrls: ['./draft-form-ndz.component.scss']
})
export class DraftFormNdzComponent implements OnInit {

  // selectedCategory: any = null;

  currentQuestion: any = null;

  // categories: any[] = [
  //   { value: 'Accounting', name: 'category', key: 'A' },
  //   { value: 'Marketing', name: 'category', key: 'M' },
  //   { value: 'Production', name: 'category', key: 'P' },
  //   { value: 'Research', name: 'category', key: 'R' }
  // ];

  myForm: FormGroup;
  // myform = new FormGroup({
  //   // category: new FormControl('', Validators.required),
  //   question: new FormControl('', Validators.required),
  // });

  constructor(private _questionsSv: QuestionsService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    // this.selectedCategory = this.categories[1];
    this.currentQuestion = this._questionsSv.getCurrentQuestion();

    this.myForm = this._fb.group({
      question: ['', Validators.required],
    });

  }
  get f() {
    // console.log('form controls:', this.myform.controls);
    return this.myForm.controls;
  }

  submit() {
    console.log('submitted:', this.myForm.value);
    // this.getCtrl();
  }

  onRadioChange(sport: any) {
    console.log('changed:', sport);
  }

  getCtrl() {
    let xx = this.myForm.controls['sport'] as FormControl;
    console.log('xx:', xx);
    console.log('xx:', xx.value);
  }

}
