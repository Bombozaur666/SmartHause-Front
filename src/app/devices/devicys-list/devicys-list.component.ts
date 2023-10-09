import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-devicys-list',
  templateUrl: './devicys-list.component.html',
  styleUrls: ['./devicys-list.component.css']
})
export class DevicysListComponent implements OnInit{


  constructor(private dev: DeviceService) {}

  ngOnInit(): void {
    this.dev.fetchDevicys();
  }
}
