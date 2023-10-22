import { Component, Input, ViewChild } from '@angular/core';
import { Results } from '../../../models/results.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-results-group-humidity',
  templateUrl: './results-group-humidity.component.html',
  styleUrls: ['./results-group-humidity.component.css']
})
export class ResultsGroupHumidityComponent {
  protected readonly displayedColumns: string[] = ['position', 'date', 'humidity', 'absolute_humidity'];
  @Input() results: Results[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  protected dataSource: any;

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<Results>(this.results);
    this.dataSource.paginator = this.paginator;
  }
}