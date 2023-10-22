import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent {

  @Input() device: Device;

  constructor (private dev: DeviceService) {}

  onRemove(id: number): void {
    console.log('remove' + id);
  }

  onEdit(id:  number): void {
    console.log('edit' + id);
  }
}
