import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';

@Injectable()
export class DeviceService {
    private deviceList: Device[] = [];

}