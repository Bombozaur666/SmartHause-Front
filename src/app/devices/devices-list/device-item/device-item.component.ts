import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html'
})
export class DeviceItemComponent {

  @Input() device: Device;

  constructor () {}

}
