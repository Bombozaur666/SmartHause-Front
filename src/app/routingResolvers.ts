import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Device } from "./models/device.model";
import { DeviceService } from "./devices/device.service";
import { inject } from '@angular/core';
import { Observable } from "rxjs";

export const fetchDevicesResolver: ResolveFn<Device[]> = (
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Device[]> => {
        return inject(DeviceService).fetchDevices();
    }