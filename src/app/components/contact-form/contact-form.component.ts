import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() questionForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get nameFormControl() {
    return this.questionForm.get('name');
  }

  get lastNameFormControl() {
    return this.questionForm.get('lastname');
  }

  get emailFormControl() {
    return this.questionForm.get('email');
  }

  get dateAndHourFormControl() {
    return this.questionForm.get('date');
  }


}
