import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceService } from '../device.service';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/app/models/device.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-devicys-list',
  templateUrl: './devicys-list.component.html',
  styleUrls: ['./devicys-list.component.css']
})
export class DevicysListComponent implements OnInit, OnDestroy{
  protected devicesList: Device[] = [];
  subscription: Subscription = Subscription.EMPTY;
  protected error: string|null = null;
  protected isFetching:boolean = false;
  

  constructor(private dev: DeviceService, private http: HttpClient) {}

  ngOnInit(): void {
      this.onFetch();
  }
  onFetch() {
    this.isFetching=true;
    this.subscription = this.dev.fetchDevicys().subscribe(
      {
        next: data => {
          this.devicesList = [];
          this.devicesList = data;  
        }, 
        error: error => {
          this.error=error.message;
        }      
      }
    );
    this.isFetching = false;
      
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
