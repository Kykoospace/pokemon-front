import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private form = this.formBuilder.group({
    firstQuestion: this.formBuilder.control('', Validators.required),
    secondQuestion: this.formBuilder.control('', Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

  }

  private submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
