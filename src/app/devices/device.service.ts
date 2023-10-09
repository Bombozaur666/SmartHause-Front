import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject} from 'rxjs';
 
@Injectable()
export class DeviceService {
    
    error = new Subject<string>();


    constructor(private http: HttpClient) {};
    fetchDevicys() {
        return this.http.get<Device[]>(
            "http://localhost:8000/devices/list/"
        )
    }
}