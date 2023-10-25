import { Device } from "./device.model";

export interface Results {
    id: number,
    device: Device, 
    created: string,
    value_1: number,
    value_2: number
}