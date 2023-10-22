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
  protected device: Device;
  private id:number;
  protected resultsTemperature: Results[] = [];
  protected resultsHumidity: Results[] = [];
  protected error: string|null = null;
  protected isFetching:boolean = false;
  protected readonly TEMPERATURE: string = 'temperature';
  protected readonly HUMIDITY: string = 'humidity';
  protected tab: string = this.TEMPERATURE;
  
  private readonly allowedTabs: string[] = [this.TEMPERATURE, this.HUMIDITY];


  constructor(private res: ResultService,
              private dev: DeviceService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.device = this.dev.getDevice(this.id);
    this.onFetch();
  }

  onFetch(): void {
    this.isFetching = true;
    switch(this.device.type) {
      case 'thermal and humidity': {
        this.subscription = this.res.fetchResults(this.id).subscribe({
          next: data => {
            this.resultsTemperature = data[this.TEMPERATURE];
            this.resultsHumidity = data[this.HUMIDITY];
            this.isFetching = false;
          }, 
          error: error => {
            this.error=error.message;
            this.isFetching = false;
          }      
        });
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onChangeTab(name: string): void {
    if (this.allowedTabs.includes(name)) {
      this.error = null;
      this.tab=name;
    } else {
      this.error = 'Please select proper tab';
    }
    
  }

  onRefresh():void {
    this.onFetch();
  }
 
}
