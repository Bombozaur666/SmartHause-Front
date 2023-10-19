import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, map} from 'rxjs';
import { Results } from 'src/app/models/results.model';
import { Subscription } from 'rxjs';

@Injectable()
export class ResultService implements OnDestroy{
    subscription: Subscription= Subscription.EMPTY;

    constructor(private http: HttpClient) {};

    fetchResults(id: number, type: string) {
        const link = 'http://localhost:8000/devices' + id + 'results' + type;
        return this.http.get<Results[]>(
            link
        ).subscribe({
            next: data => {
              ;
            }, 
            error: error => {
              ;
            }      
          });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}