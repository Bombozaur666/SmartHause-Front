import { Device } from "./device.model";

export interface Humi {
    id: number,
    device: Device, 
    date: string,
    humidity: number,
    absolute_humidity: number 
}