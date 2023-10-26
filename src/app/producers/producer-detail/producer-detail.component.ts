import { Component } from '@angular/core';
import { Producer } from 'src/app/models/producer.model';
import { ProducersService } from '../producers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['../../shared/detail-card/detail-card.component.css']
})
export class ProducerDetailComponent {
  private id: number;  
  protected producer: Producer;

 constructor(private producerService: ProducersService,
   private route: ActivatedRoute) {
}

ngOnInit(): void {
  this.route.params
  .subscribe(
    (params: Params) => { 
      this.id = +params['id'];
      this.producer = this.producerService.getProducer(this.id);
    }
  )
  }
}
