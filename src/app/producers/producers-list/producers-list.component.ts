import { Component, OnInit, OnDestroy } from '@angular/core';
import { Producer } from 'src/app/models/producer.model';
import { ProducersService } from '../producers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producers-list',
  templateUrl: '../../shared/element-list/element-list.component.html',
  styleUrls: ['../../shared/element-list/element-list.component.css']
})
export class ProducersListComponent implements OnInit, OnDestroy{
  protected readonly addNewButton: string = 'New Producer';
  protected elementList: Producer[] = [];
  private subscriptionFetch: Subscription = Subscription.EMPTY;
  private subscriptionProducer: Subscription = Subscription.EMPTY;
  protected error: string|null = null;
  protected isFetching:boolean = false;
  protected readonly bodyEl: string|null = null;

  

  constructor(private producerService: ProducersService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.onFetch();
  }
  onFetch() {
    this.isFetching=true;
    this.subscriptionProducer = this.producerService.producersChanged.subscribe(
      {
        next: data => {
          this.elementList = data;
        }   
      }
    );
    
    this.subscriptionFetch = this.producerService.fetchProducers().subscribe(
      {
        next: () => {
          this.elementList = this.producerService.getProducers();
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
    this.subscriptionProducer.unsubscribe();
  }
}
