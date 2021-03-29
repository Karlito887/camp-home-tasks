import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserFormComponent } from './add-user-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
      path: '',
      component: AddUserFormComponent,
  }
];

@NgModule({
  declarations: [AddUserFormComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class AddUserFormModule { }
