import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Output() newPersonEvent = new EventEmitter()

  addPersonForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addPersonForm = this.fb.group({
      name: [''],
      degree: [''],
      direction: [''],
    })
  }

  addNewPerson(value) {
    this.newPersonEvent.emit(value)
  }

  onSubmit() {
    this.addNewPerson(this.addPersonForm.value)
    this.addPersonForm.reset()
    
  }
}
