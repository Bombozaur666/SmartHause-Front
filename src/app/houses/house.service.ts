import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { House } from '../models/house.model';

 
@Injectable()
export class HouseService {
    housesChanged = new Subject<House[]>();
    destroyComponent = new Subject<Number>();
    private houses: House[] = [];
    readonly url: string = "http://localhost:8000/houses/"
    
    constructor(private http: HttpClient) {};


    fetchHouses(): Observable<House[]> {
        return this.http.get<House[]>(
            this.url + 'list/'
        ).pipe(
            tap(houses => {
                this.setHouses(houses);
            })
        )
    }

    removeHouse(id: number): Observable<any> {
        return this.http.delete(
            this.url + id + '/remove/'
        );
    }

    removeHouseFromArray(id: number):void {
        this.houses = this.houses.filter(houses => {
            return houses.id !== id;
        });
        this.housesChanged.next(this.houses.slice());
        this.destroyComponent.next(id);
    }

    setHouses(houses: House[]): void {
        this.houses = houses;
        this.housesChanged.next(this.houses.slice());
    }

    getHouse(id: number): House {
        return this.houses.find(dev => dev.id == id);
    }

    getHouses(): House[] {
        return this.houses.slice();
    }
}