import { Person } from './../../models/person.model';
import { TableService } from '../../services/table.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  personsData
  displayedColumns: string[]
  constructor(private readonly tableService: TableService) { }

  ngOnInit(): void {
    this.personsData = new MatTableDataSource(this.tableService.data)
    this.displayedColumns = ['id', 'name', 'degree', 'direction', 'deleteBtn']
  }

  renderTable() {
    this.personsData = new MatTableDataSource(this.tableService.data)
  }

  addPerson(value) {
    this.tableService.addPerson(value)
    this.renderTable()
  }

  deletePerson(id) {
    this.tableService.removePerson(id)
    this.renderTable()
  }
}
