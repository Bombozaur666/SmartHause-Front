import { Component } from '@angular/core';
import { HouseService } from '../house.service';
import { House } from '../../models/house.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-houses-detail',
  templateUrl: './houses-detail.component.html'
})
export class HousesDetailComponent {
   private id: number;  
   protected house: House;

  constructor(private houseService: HouseService,
    private route: ActivatedRoute) {
}

ngOnInit(): void {
  this.route.params
  .subscribe(
    (params: Params) => { 
      this.id = +params['id'];
      this.house = this.houseService.getHouse(this.id);
    }
  )
}
}
