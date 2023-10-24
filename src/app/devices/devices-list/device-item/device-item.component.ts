import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from '../../device.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent implements OnDestroy{
  private subscription: Subscription = Subscription.EMPTY;
  private positiveRemoveMessage: string = 'Device has been succesfully removed';
  @Input() device: Device;

  constructor (private dev: DeviceService,
               private snackBar: MatSnackBar) {}


  onRemove(id: number): void {
    this.subscription = this.dev.removeDevice(id)
    .subscribe({
      next: data => {
          this.dev.removeDeviceFromArray(id);
          this.openSnackBar(this.positiveRemoveMessage);
      },
      error: error => {
          ;
      }
    });
  }
  openSnackBar(message: string) {
    this.snackBar.open(message);
  }

  onEdit(id:  number): void {
    console.log('edit' + id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
