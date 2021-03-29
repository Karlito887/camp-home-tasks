import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: '',
    component: TableComponent,
  }
];

@NgModule({
  declarations: [TableComponent, AddItemFormComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule, ReactiveFormsModule
  ]
})
export class ServiceTaskModule { }
