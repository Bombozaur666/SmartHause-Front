import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { House } from 'src/app/models/house.model';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-houses-list',
  templateUrl: '../../shared/element-list.component.html'
})
export class HousesListComponent implements OnInit, OnDestroy{
  protected readonly addNewButton: string = 'New House';
  protected elementList: House[] = [];
  private subscriptionFetch: Subscription = Subscription.EMPTY;
  private subscriptionHouse: Subscription = Subscription.EMPTY;
  protected error: string|null = null;
  protected isFetching:boolean = false;
  protected readonly bodyEl: string|null = null;

  

  constructor(private houseService: HouseService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.onFetch();
  }
  onFetch() {
    this.isFetching=true;
    this.subscriptionHouse = this.houseService.housesChanged.subscribe(
      {
        next: data => {
          this.elementList = data;
        }   
      }
    );
    
    this.subscriptionFetch = this.houseService.fetchHouses().subscribe(
      {
        next: () => {
          this.elementList = this.houseService.getHouses();
          this.isFetching = false;
        }, 
        error: error => {
          this.error = error.message;
          this.isFetching = false;
        }      
      }
    );
  }

  onNewElement(): void {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onRefresh(): void {
    this.onFetch();
  }

  ngOnDestroy(): void {
    this.subscriptionFetch.unsubscribe();
    this.subscriptionHouse.unsubscribe();
  }
}
