export class Device {
    public name: string;
    public producer: string;
    public apiUrl: string;
    public type: string;
    public house: number;
    public active: boolean;
    public ipAddress: string;
    public port: number;
    public protocol: string;

    constructor(
        name: string, 
        producer: string,
        apiUrl: string, 
        type: string, 
        house: number, 
        active: boolean, 
        ipAddress: string, 
        port: number, 
        protocol: string) {
            this.name = name;
            this.producer = producer;
            this.apiUrl = apiUrl;
            this.type = type; 
            this.house = house;
            this.active = active;
            this.ipAddress = ipAddress;
            this.port = port;
            this.protocol = protocol;
    }    
}