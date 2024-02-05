import { ReactNode, createContext, useEffect, useState } from "react";
import { CartItems } from "../@types/product";
import { api } from "../lib/axios";

interface ProductProviderProps {
    children: ReactNode
}

interface ProductContextType {
    cartItems: CartItems[]
    setCartItems: (newState: CartItems[]) => void
    product: CartItems[]
    setProduct: (newState: CartItems[]) => void
    fetchProducts: (c: CartItems[]) => Promise<void>
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export function ProductProvider({ children }: ProductProviderProps) {
        
    const [ cartItems, setCartItems ] = useState<CartItems[]>([])

    const [ product, setProduct ] = useState<CartItems[]>([])

    
    async function fetchProducts(){
        const response = await api.get('/products')
        setProduct(response.data.products)
    }
    
    useEffect(() => {
        fetchProducts()
        
        const getCartItems = localStorage.getItem('items')
        if(getCartItems){
            const parseGetItems = JSON.parse(getCartItems)
            setCartItems(parseGetItems)
        }
    }, [product])

    return (
        <ProductContext.Provider value={{ cartItems, setCartItems, product, setProduct, fetchProducts, }}>
            {children}
        </ProductContext.Provider>
    )
}