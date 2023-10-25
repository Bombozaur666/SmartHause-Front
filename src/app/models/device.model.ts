import { House } from "./house.model";
import { Producer } from "./producer.model";

export interface Device {
    id: number,
    name: string, 
    producer: Producer,
    apiUrl: string, 
    type: string, 
    house: House, 
    active: boolean, 
    ip_address: string, 
    port: number, 
    protocol: string
}