import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";


export function useSum(){

    const { cartItems } = useContext(ProductContext)

    const sum = cartItems.reduce(
        (acc, product) => {

            acc.totalValue += product.productPrice

            return acc
        },
        {
            totalValue: 0,
        }
    )

    return sum
}