import { Device } from "./device.model";

export class Humi {
    constructor(
        public id: number,
        public device: Device, 
        public date: string,
        public humidity: number,
        public absolute_humidity: number
) {}    
}