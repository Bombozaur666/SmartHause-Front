import { City } from "./city.model";

export interface Address {
    city: City,
    street: string,
    zip_code: string,
    house_number: string,
    flat_number: number
}