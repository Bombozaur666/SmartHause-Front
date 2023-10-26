import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Device } from "./models/device.model";
import { DeviceService } from "./devices/device.service";
import { inject } from '@angular/core';
import { Observable } from "rxjs";
import { House } from "./models/house.model";
import { HouseService } from "./houses/house.service";
import { Producer } from "./models/producer.model";
import { ProducersService } from "./producers/producers.service";

export const fetchDevicesResolver: ResolveFn<Device[]> = (
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Device[]> => {
        return inject(DeviceService).fetchDevices();
    }

export const fetchHouseResolver: ResolveFn<House[]> = (
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<House[]> => {
        return inject(HouseService).fetchHouses();
    }

export const fetchProducerResolver: ResolveFn<Producer[]> = (
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Producer[]> => {
        return inject(ProducersService).fetchProducers();
    }    