import { Device } from "./device.model";

export class Results {
    constructor(
        public id: number,
        public device: Device, 
        public date: string,
        public value_1: number,
        public value_2: number
) {}    
}