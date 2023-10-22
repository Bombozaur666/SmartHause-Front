import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Results } from 'src/app/models/results.model';

@Component({
  selector: 'app-results-group-temperature',
  templateUrl: './results-group-temperature.component.html',
  styleUrls: ['./results-group-temperature.component.css']
})
export class ResultsGroupTemperatureComponent implements AfterViewInit {
  protected readonly displayedColumns: string[] = ['position', 'date', 'temperature', 'heat_index'];
  @Input() results: Results[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  protected dataSource = new MatTableDataSource;

  ngAfterViewInit(): void {
    this.dataSource.data = this.results;
    this.dataSource.paginator = this.paginator;
  }
}
