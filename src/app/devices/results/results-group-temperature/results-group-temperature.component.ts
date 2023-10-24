import { AfterViewInit, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Results } from 'src/app/models/results.model';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-results-group-temperature',
  templateUrl: './results-group-temperature.component.html',
  styleUrls: ['./results-group-temperature.component.css']
})
export class ResultsGroupTemperatureComponent implements AfterViewInit, OnInit, OnDestroy {
  protected readonly displayedColumns: string[] = ['position', 'date', 'temperature', 'heat_index'];
  @Input() results: Results[];
  @Input() id:number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  protected dataSource = new MatTableDataSource;
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
    this.dataSource.data = this.results;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscriptionDestroy.unsubscribe();
  }
}
