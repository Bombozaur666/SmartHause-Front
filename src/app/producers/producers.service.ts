import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Producer } from '../models/producer.model';

 
@Injectable()
export class ProducersService {
    producersChanged = new Subject<Producer[]>();
    destroyComponent = new Subject<Number>();
    private producers: Producer[] = [];
    readonly url: string = "http://localhost:8000/producers/"
    
    constructor(private http: HttpClient) {};


    fetchProducers(): Observable<Producer[]> {
        return this.http.get<Producer[]>(
            this.url + 'list/'
        ).pipe(
            tap(producers => {
                this.setProducers(producers);
            })
        )
    }

    removeProducers(id: number): Observable<any> {
        return this.http.delete(
            this.url + id + '/remove/'
        );
    }

    removeProducersFromArray(id: number):void {
        this.producers = this.producers.filter(houses => {
            return houses.id !== id;
        });
        this.producersChanged.next(this.producers.slice());
        this.destroyComponent.next(id);
    }

    setProducers(producers: Producer[]): void {
        this.producers = producers;
        this.producersChanged.next(this.producers.slice());
    }

    getProducer(id: number): Producer {
        return this.producers.find(dev => dev.id == id);
    }

    getProducers(): Producer[] {
        return this.producers.slice();
    }
}