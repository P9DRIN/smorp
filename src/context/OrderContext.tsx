import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../lib/axios"


interface OrderProviderProps{
    children: ReactNode
}

interface OrderItem{
        _id: string,
        productName: string,
        productImage: string,
        productPrice: number,
        productLDescription: string,
        productSDescription: string,
        v?: number,
}
export interface Order{
    items: OrderItem[],
    paymentMethod: string,
    totalValue: string,
    deliveryTax: number,
    orderNum: string,
    id?: string,
}

interface OrderContextProps{
    order: Order[],
    fetchOrders: () => Promise<void>
    
}


export const OrderContext = createContext({} as OrderContextProps)

export function OrderProvider({ children }: OrderProviderProps){

    const [order, setOrder] = useState<Order[]>([])

    async function fetchOrders(){
        const getEmail = localStorage?.getItem('user') || ''
        if(getEmail){
            const transformEmail = JSON.parse(getEmail)
            const response = await api.get(`acc/${transformEmail.email}/orders`)
            setOrder(response.data.orders[0])
        }
    }
    
    useEffect(() => {
            fetchOrders()
    }, [])


    return(
        <OrderContext.Provider value={{ order, fetchOrders }}>
            {children}
        </OrderContext.Provider>
    )
}