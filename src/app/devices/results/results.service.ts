import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, map} from 'rxjs';
import { Humi } from 'src/app/models/humi.model';
import { Temp } from 'src/app/models/temp.model';
 
@Injectable()
export class ResultService {
        
    constructor(private http: HttpClient) {};

    fetchResults(id: number, type: string) {
        const link = 'http://localhost:8000/devices' + id + 'results' + type
        return this.http.get<Humi[]|Temp[]>(
            link
        );
    }
}