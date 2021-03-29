import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  addUserForm: FormGroup
  users: object[]

  private readonly passwordRegex: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator.bind(this)]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordValidator.bind(this)]],
      status: ['']
    })
  }

  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
        const isValid = this.passwordRegex.test(control.value);
        return !isValid ? {invalidPassword: true} : null;

    }

    return null;
}

  private confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    if(control?.value) {
      return control.value !== this.addUserForm.value.password ? {invalidPassword: true} : null;
    }
    return null
  }

  onSubmit(): void {
    console.log(this.addUserForm);
  }

}
