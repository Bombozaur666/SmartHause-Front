import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-producers-item',
  templateUrl: '../../../shared/element-item/element-item.component.html',
  styleUrls: ['../../../shared/element-item/element-item.component.css']
})
export class ProducersItemComponent {
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