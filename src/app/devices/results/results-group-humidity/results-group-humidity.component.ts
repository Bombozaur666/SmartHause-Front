import { AfterViewInit, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Results } from '../../../models/results.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-results-group-humidity',
  templateUrl: './results-group-humidity.component.html',
  styleUrls: ['./results-group-humidity.component.css']
})
export class ResultsGroupHumidityComponent implements AfterViewInit, OnInit, OnDestroy{
  protected readonly displayedColumns: string[] = ['position', 'date', 'humidity', 'absolute_humidity'];
  @Input() results: Results[];
  @Input() id:number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  protected dataSource: any;
  private subscriptionDestroy: Subscription = Subscription.EMPTY;

  constructor (private dev: DeviceService) {};

  ngOnInit(): void {
    this.subscriptionDestroy = this.dev.destroyComponent.subscribe({
      next: (state: number) => {
        console.log(state);
        if (state === this.id) {
          this.ngOnDestroy();
        }
      }
    })
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<Results>(this.results);
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscriptionDestroy.unsubscribe();
  }
}