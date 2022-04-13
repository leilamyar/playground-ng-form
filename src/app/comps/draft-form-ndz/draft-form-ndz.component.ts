import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-draft-form-ndz',
  templateUrl: './draft-form-ndz.component.html',
  styleUrls: ['./draft-form-ndz.component.scss']
})
export class DraftFormNdzComponent implements OnInit {

  cityValue: string;

  selectedCategory: any = null;

  categories: any[] = [
    { value: 'Accounting', name: 'category', key: 'A' },
    { value: 'Marketing', name: 'category', key: 'M' },
    { value: 'Production', name: 'category', key: 'P' },
    { value: 'Research', name: 'category', key: 'R' }
  ];

  myform = new FormGroup({
    city: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    this.selectedCategory = this.categories[1];
  }
  get f() {
    // console.log('form controls:', this.myform.controls);

    return this.myform.controls;
  }

  submit() {
    console.log('submitted:', this.myform.value);
    // this.getCtrl();
  }

  onRadioChange(sport: any) {
    console.log('changed:', sport);
  }

  getCtrl() {
    let xx = this.myform.controls['sport'] as FormControl;
    console.log('xx:', xx);
    console.log('xx:', xx.value);
  }

  // addressForm = this.formBuilder.group({
  //   street: ["PayneStreet"],
  //   zip: [50000]
  // });

  // mainForm: FormGroup = this.formBuilder.group({
  //   name: ["Max"],
  //   address: this.addressForm    <-------------------
  // });

  // https://stackoverflow.com/questions/59284894/type-abstractcontrol-is-missing-the-following-properties-from-type-formgroup


}
