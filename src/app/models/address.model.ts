import { City } from "./city.model";

export interface Address {
    city: City,
    street: string,
    zipCode: string,
    hauseNumber: string,
    flatNumber: number
}