import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, } from '@angular/common/http';
import { Subject, map } from 'rxjs';

 
@Injectable()
export class DeviceService {
    devicesChanged = new Subject<Device[]>();
    private devices: Device[] = [];
    
    constructor(private http: HttpClient) {};

    fetchDevices() {
        return this.http.get<Device[]>(
            "http://localhost:8000/devices/list/"
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
            )
        )
    }

    setDevices(devices: Device[]):void {
        this.devices = devices;
        this.devicesChanged.next(devices.slice());
        console.log(devices);
    }

    getDevice(id: number): Device {
        return this.devices.find(dev => dev.id == id);
    }

    getDevices() {
        return this.devices.slice();
    }
}