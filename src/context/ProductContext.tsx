import { ReactNode, createContext, useState } from "react";
import { CartItems } from "../@types/product";


interface ProductProviderProps {
    children: ReactNode
}

interface ProductContextType {
    cartItems: CartItems[]
    setCartItems: (newState: CartItems[]) => void
}
export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export function ProductProvider({ children }: ProductProviderProps) {
        
    const [ cartItems, setCartItems ] = useState<CartItems[]>([])


    return (
        <ProductContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </ProductContext.Provider>
    )
}