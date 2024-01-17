import { ShoppingBagOpen } from 'phosphor-react'
import { Container, Price, BuyButton } from './style'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { priceFormatter } from '../utils/priceFormatter'
import { DataItems } from '../@types/product'

export function Card({ data }: DataItems) {

    const { setCartItems, cartItems } = useContext(ProductContext)

    const { id, price, thumbnail } = data

    const handleAddToCart = () => {
        setCartItems([...cartItems, data])
    }

    return(
        <>
            <Container key={id}>
                <img alt='' src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}/>
                <Price>{priceFormatter.format(price)}</Price>
                <BuyButton onClick={handleAddToCart}><ShoppingBagOpen size={24} /></BuyButton>
            </Container>
        </>
    )
}