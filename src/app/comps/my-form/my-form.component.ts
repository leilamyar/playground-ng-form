import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  sportsList = [
    {
      id: 1,
      name: 'sport',
      value: 'cricket',
      label: 'Cricket'
    }, {
      id: 2,
      name: 'sport',
      value: 'football',
      label: 'Football'
    }, {
      id: 3,
      name: 'sport',
      value: 'swimming',
      label: 'Swimming'
    }, {
      id: 4,
      name: 'sport',
      value: 'hockey',
      label: 'Hockey'
    }
  ]

  myform = new FormGroup({
    sport: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {

  }
  get f() {
    console.log('form controls:', this.myform.controls);

    return this.myform.controls;
  }

  getCtrl() {
    let xx = this.myform.controls['sport'] as FormControl;
    console.log('xx:', xx);
    console.log('xx:', xx.value);

  }

  submit() {
    console.log('submitted:', this.myform.value);
    this.getCtrl();
  }
  onRadioChange(sport: any) {
    console.log('changed:', sport);
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
