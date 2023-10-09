import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
 
@Injectable()
export class DeviceService {
    private deviceList: Device[] = [];
    public isFetching:boolean = false;

    constructor(private http: HttpClient) {};
    fetchDevicys() {
        this.isFetching = true;
        this.http.get<Device[]>(
            "http://localhost:8000/devices/list/"
        )
        .subscribe(response => {
            console.log(response);
        } )
    }

    setDevicys() {

    }

    getDevicys(): Device[] {
        return this.deviceList.slice()

    }





}