import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  age: FormControl;
  email:FormControl;

  // TODO 1: define email form control

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.age = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]);
    this.email = new FormControl('', [Validators.required,  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

    // TODO 2: define email form control with email Validator
    // TODO 3: add email form control to user form
    this.userForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      email : this.email
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.submitted = true;
    }
  }
}
