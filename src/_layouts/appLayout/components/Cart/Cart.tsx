import { ShoppingCart } from "phosphor-react";
import { Wrapper, Quantity } from './CartStyle'
import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductContext";


export function Cart(){

    const { cartItems } = useContext(ProductContext)
    
    return(
        <>
        <Wrapper>
        <ShoppingCart size={32}/>
        <Quantity>{cartItems.length}</Quantity>
        </Wrapper>
        
        </>
    )
}