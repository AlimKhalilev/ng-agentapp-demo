import { FormControl } from "@angular/forms";

/** Данные формы добавления пользователя */
export type AddUserForm = {
    [key in keyof AddUser]: FormControl<string>
};

/** Данные добавляемого пользователя */
export interface AddUser {
    name: string,
    email: string
}

/** Данные пользователя */
export interface User extends AddUser {
    id: number;
    username: string;
    phone: string;
    website: string;
    address?: UserAddress;
    company?: UserCompany;
}

/** Данные компании пользователя */
interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

/** Данные адреса пользователя */
interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserAddressGeo;
}

/** Данные геолокации адреса пользователя */
interface UserAddressGeo {
    lat: string;
    lng: string;
}