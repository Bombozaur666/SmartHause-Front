import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from '../../device.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component'; 

@Component({
  selector: 'app-device-item',
  templateUrl: '../../../shared/card-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent implements OnDestroy{
  private subscription: Subscription = Subscription.EMPTY;
  private positiveRemoveMessage: string = 'Device has been succesfully removed';
  private initialErrorMessage: string = 'An error occured: \n';
  @Input() element: Device;

  constructor (private dev: DeviceService,
               private snackBar: MatSnackBar,
               public dialog: MatDialog) {}


  onRemove(id: number): void {
    this.subscription = this.dev.removeDevice(id)
    .subscribe({
      next: () => {
          this.dev.removeDeviceFromArray(id);
          this.openSnackBar(this.positiveRemoveMessage);
      },
      error: error => {
          this.openAlertDialog(error.message, this.initialErrorMessage);
      }
    });
  }

  openAlertDialog(errorMessage: string, header: string|null) {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: errorMessage,
        header: header,
        buttonText: {
          cancel: 'OK'
        },

      },
    });
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message);
  }

  onEdit(id:  number): void {
    console.log('edit' + id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
