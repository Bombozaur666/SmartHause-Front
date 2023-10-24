import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, } from '@angular/common/http';
import { Observable, Subject, map, tap } from 'rxjs';

 
@Injectable()
export class DeviceService {
    devicesChanged = new Subject<Device[]>();
    destroyComponent = new Subject<Number>();
    private devices: Device[] = [];
    readonly url: string = "http://localhost:8000/devices/"
    
    constructor(private http: HttpClient) {};


    fetchDevices(): Observable<Device[]> {
        return this.http.get<Device[]>(
            this.url + 'list/'
        ).pipe(
            map(
                devices => {
                    devices.forEach(device => {
                        switch(device.type) {
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

    removeDevice(id: number): Observable<any> {
        return this.http.delete(
            this.url + id + '/remove/'
        );
    }

    removeDeviceFromArray(id: number):void {
        this.devices = this.devices.filter(devices => {
            return devices.id !== id;
        });
        this.devicesChanged.next(this.devices.slice());
        this.destroyComponent.next(id);
    }

    setDevices(devices: Device[]): void {
        this.devices = devices;
        this.devicesChanged.next(this.devices.slice());
    }

    getDevice(id: number): Device {
        return this.devices.find(dev => dev.id == id);
    }

    getDevices(): Device[] {
        return this.devices.slice();
    }
}