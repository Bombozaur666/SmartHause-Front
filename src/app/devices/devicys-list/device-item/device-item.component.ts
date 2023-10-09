import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent implements OnInit{

  @Input() device: Device;
  @Input() id: number;

  constructor (private http: HttpClient, private dec: DeviceService) {}

   ngOnInit(): void {
         
   }

}
