import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  exampleForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    alias: new FormArray([ new FormControl("")])
  });

  addNewAlias() {
    this.alias.push(this.fb.control(""));
  }
  get aliases() {
    return this.exampleForm.get("alias") as FormArray;
  }
}
