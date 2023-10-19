import { House } from "./house.model";
import { Producer } from "./producer.model";

export class Device {
    constructor(
        public id: number,
        public name: string, 
        public producer: Producer,
        public apiUrl: string, 
        public type: string, 
        public house: House, 
        public active: boolean, 
        public ip_address: string, 
        public port: number, 
        public protocol: string) {}    
}