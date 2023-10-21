import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { ResultService } from './results.service';
import { Results } from 'src/app/models/results.model';
import { DeviceService } from '../device.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = Subscription.EMPTY;
  private device: Device;
  private id:number;
  protected resultsTemp: Results[] = [];
  protected resultsHumidity: Results[] = [];
  protected error: string|null = null;
  protected isFetching:boolean = false;
  private tab:string = 'temp';

  constructor(private http: HttpClient, 
              private res: ResultService,
              private dev: DeviceService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.device = this.dev.getDevice(this.id);
    this.onFetch();
  }

  onFetch(): void {
    this.isFetching = true;
    console.log(this.device);
    switch(this.device.type) {
      case 'thermal and humidity': {
        this.res.fetchResults(this.id);
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
