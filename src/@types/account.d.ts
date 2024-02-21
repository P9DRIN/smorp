interface AddressProps {
    street: string,
    houseNumber: string,
    zipCode: string,
    city: string,
    federalUnit: string,
}
interface OrdersProps {
    productName?: string,
    productImage?: string,
    productPrice?: string,
}

export interface AccountProps {
    email: string,
    password: string,
    fullName: string,
    address: AddressProps[],
    createdAt?: string,
}

export interface AccountInputProps {
    email: string
    password: string
    fullName: string
    street: string
    houseNumber: string
    zipCode: string
    city: string
    federalUnit: string
    address?: AddressProps[]
    createdAt?: string
}
export interface LoginProps {
    email: string
    password: string
}


export interface LoginInputProps{
    email: string
}



export interface editAccountProps{
    street: string,
    houseNumber: string,
    zipCode: string,
    city: string,
    federalUnit: string,
}