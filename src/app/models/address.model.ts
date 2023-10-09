import { City } from "./city.model";

export class Address {
    constructor(
        public city: City,
        public street: string,
        public zipCode: string,
        public hauseNumber: string,
        public flatNumber: number
    ){}
}