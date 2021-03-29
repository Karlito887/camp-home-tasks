import { Person } from './../models/person.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  data: Person[] = [
    {
      id: 1,
      name: 'Nazar',
      degree: 'student',
      direction: 'Front End'
    },
    {
      id: 2,
      name: 'Vasya',
      degree: 'trainee',
      direction: 'Front End'
    },
    {
      id: 3,
      name: 'Oksana',
      degree: 'middle',
      direction: 'Back End'
    },
    {
      id: 4,
      name: 'Roman',
      degree: 'senior',
      direction: 'Data Science'
    },
  ]

  addPerson(value) {
    value.id = this.data[this.data.length - 1].id + 1
    this.data.push(value)

  }
  
  removePerson(id) {
    this.data = this.data.filter(el => el.id !== id)
    this.data.forEach((el, index) => el.id = index + 1)
  }
}
