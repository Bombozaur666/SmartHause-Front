import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceService } from '../device.service';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/app/models/device.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html'
})
export class DevicesListComponent implements OnInit, OnDestroy{
  protected devicesList: Device[] = [];
  private subscription: Subscription = Subscription.EMPTY;
  protected error: string|null = null;
  protected isFetching:boolean = false;
  

  constructor(private dev: DeviceService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.onFetch();
  }
  onFetch() {
    this.isFetching=true;
    this.subscription = this.dev.fetchDevices().subscribe(
      {
        next: data => {
          this.devicesList = this.dev.getDevices();
          this.isFetching = false;
        }, 
        error: error => {
          this.error=error.message;
          this.isFetching = false;
        }      
      }
    );
  }

  onNewDevice(): void {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onRefresh(): void {
    this.onFetch();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
