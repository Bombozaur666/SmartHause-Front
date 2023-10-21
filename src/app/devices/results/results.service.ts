import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Results } from 'src/app/models/results.model';
import { Subscription } from 'rxjs';

@Injectable()
export class ResultService {
    readonly url: string = 'http://localhost:8000/devices/'

    constructor(private http: HttpClient) {};

    fetchResults(id: number) {
        const link = this.url + id + '/results/';
        return this.http.get<Results[]>(
            link
        )
    }
}