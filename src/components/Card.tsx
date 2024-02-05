import { ShoppingBagOpen } from 'phosphor-react'
import { Container, Price, BuyButton } from './style'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { priceFormatter } from '../utils/priceFormatter'
import { DataItems } from '../@types/product'

export function Card({ data }: DataItems) {

    const { cartItems } = useContext(ProductContext)

    const { _id, productName, productImage, productPrice, productLDescription, productSDescription } = data

    const handleAddToCart = () => {
        const hasLocalStorage = localStorage.getItem('items')

        if(hasLocalStorage){
            cartItems.push(data)
            const fullyData = JSON.parse(hasLocalStorage)
            fullyData.push(data)
            localStorage.setItem('items', JSON.stringify(fullyData))

        }else{
            cartItems.push(data)
            localStorage.setItem('items', JSON.stringify(cartItems))
        }

    }

    return(
        <>
            <Container key={_id}>
                <img alt='' src={productImage}/>
                <Price>{priceFormatter.format(productPrice)}</Price>
                <BuyButton onClick={handleAddToCart}><ShoppingBagOpen size={24} /></BuyButton>
            </Container>
        </>
    )
}