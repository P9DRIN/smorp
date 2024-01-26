import { ReactNode, createContext, useEffect, useState } from "react";
import { CartItems } from "../@types/product";

interface ProductProviderProps {
    children: ReactNode
}

interface ProductContextType {
    cartItems: CartItems[]
    setCartItems: (newState: CartItems[]) => void
    product: CartItems[]
    setProduct: (newState: CartItems[]) => void
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export function ProductProvider({ children }: ProductProviderProps) {
        
    const [ cartItems, setCartItems ] = useState<CartItems[]>([])

    const [ product, setProduct ] = useState<CartItems[]>([])

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLB/search?q=iphone')
        .then((response) => response.json())
        .then((data) => setProduct(data.results))
        
    }, [])
  

    return (
        <ProductContext.Provider value={{ cartItems, setCartItems, product, setProduct }}>
            {children}
        </ProductContext.Provider>
    )
}