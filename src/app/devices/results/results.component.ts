import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { ResultService } from './results.service';
import { Humi } from 'src/app/models/humi.model';
import { Temp } from 'src/app/models/temp.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy{
  @Input() device: Device;

  protected tempResults: Temp[] = [];
  protected humiResults: Humi[] = [];
  subscription: Subscription= Subscription.EMPTY;
  protected error: string|null = null;
  protected isFetching:boolean = false;

  constructor(private http: HttpClient, private res: ResultService) {}

  ngOnInit(): void {
    this.onFetch();

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

  onFetch(): void {
    this.isFetching = true;
    this.subscription = this.res.fetchResults(this.device.id, this.device.type)
      .subscribe({
        next: data => {
          ;
        }, 
        error: error => {
          ;
        }      
      })
  };

}
