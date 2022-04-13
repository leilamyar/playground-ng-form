import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-prime-ngform',
  templateUrl: './my-prime-ngform.component.html',
  styleUrls: ['./my-prime-ngform.component.scss']
})
export class MyPrimeNGFormComponent implements OnInit {


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

  cityValue: string;

  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  myform = new FormGroup({
    // sport: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    // category: new FormControl('', Validators.required),
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
