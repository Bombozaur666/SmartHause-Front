import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from '../device.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  protected device: Device;
  private id: number;  

  constructor(private dev: DeviceService,
    private route: ActivatedRoute) {
}


ngOnInit(): void {
  this.route.params
  .subscribe(
    (params: Params) => { 
      this.id = +params['id'];
      this.device = this.dev.getDevice(this.id);
    }
  )
}
}
