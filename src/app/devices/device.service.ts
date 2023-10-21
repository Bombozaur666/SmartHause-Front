import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, } from '@angular/common/http';
import { Observable, Subject, map, tap } from 'rxjs';

 
@Injectable()
export class DeviceService {
    devicesChanged = new Subject<Device[]>();
    private devices: Device[] = [];
    readonly url: string = "http://localhost:8000/devices/list/"
    
    constructor(private http: HttpClient) {};

    fetchDevices(): Observable<Device[]> {
        return this.http.get<Device[]>(
            this.url
        ).pipe(
            map(
                devices => {
                    devices.forEach(device => {
                        switch(device.type) {
                            case 'the': {
                                device.type = 'thermal';
                                break;
                            }
                            case 'hum': {
                                device.type = 'humidity';
                                break;
                            }
                            case 'tah': {
                                device.type = 'thermal and humidity';
                                break;
                            }
                        }
                    });
                    return devices
                }
            ),
            tap(devices => {
                this.setDevices(devices);
            })
        )
    }

    setDevices(devices: Device[]): void {
        this.devices = devices;
        this.devicesChanged.next(devices.slice());
    }

    getDevice(id: number): Device {
        return this.devices.find(dev => dev.id == id);
    }

    getDevices(): Device[] {
        return this.devices.slice();
    }
}