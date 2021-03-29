import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeTaskComponent} from './home-task.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';
import { ValidatorDirective } from './validator.directive';
import { BgColorDirective } from './bg-color.directive';
import { HoverColorDirective } from './hover-color.directive';
import { ReverseStringPipe } from './reverse-string.pipe';

const routes = [
  {
    path: '',
    component: HomeTaskComponent,
  }
];

@NgModule({
  declarations: [HomeTaskComponent, ValidatorDirective, BgColorDirective, HoverColorDirective, ReverseStringPipe],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class HomeTaskModule {
}
