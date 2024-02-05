export interface CartItems {
    _id: string,
    productName: string,
    productImage: string,
    productPrice: number,
    productLDescription: string,
    productSDescription: string,
}

export interface DataItems{
    data: CartItems
}