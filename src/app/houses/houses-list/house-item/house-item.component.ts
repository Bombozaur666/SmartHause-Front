import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { House } from 'src/app/models/house.model';
import { HouseService } from '../../house.service';

@Component({
  selector: 'app-house-item',
  templateUrl: '../../../shared/element-item/element-item.component.html',
  styleUrls: ['../../../shared/element-item/element-item.component.css']
})
export class HouseItemComponent {
  private subscription: Subscription = Subscription.EMPTY;
  @Input() id: number;
  @Input() header: string;
  @Input() body: string;


  constructor (private snackBar: MatSnackBar,
               public dialog: MatDialog) {}


  onRemove(): void {
    };

  openSnackBar(message: string): void {
    this.snackBar.open(message);
  }

  onEdit(): void {
    console.log('edit' + this.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  }