import { Device } from "./device.model";

export class Temp {
    constructor(
        public id: number,
        public device: Device, 
        public date: string,
        public temp: number,
        public heat: number
) {}    
}