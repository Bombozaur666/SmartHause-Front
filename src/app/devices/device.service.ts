import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, } from '@angular/common/http';

 
@Injectable()
export class DeviceService {
    
    constructor(private http: HttpClient) {};

    fetchDevicys() {
        return this.http.get<Device[]>(
            "http://localhost:8000/devices/list/"
        )
    }
}