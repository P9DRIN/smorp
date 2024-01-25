import { XCircle } from 'phosphor-react'
import { DataItems } from '../../../@types/product'
import { priceFormatter } from '../../../utils/priceFormatter'
import { Wrapper, Image, PriceWrapper, Price, RemoveButton } from './style'
import { useContext } from 'react'
import { ProductContext } from '../../../context/ProductContext'

export function ItemCard({data}: DataItems){

    const { id, thumbnail, price } = data

    const { cartItems } = useContext(ProductContext);

    function handleRemove(){
        if(cartItems){
            const search = cartItems.findIndex((e) => e.id == id)
            if(search > -1){
                cartItems.splice(search, 1)
            }
        }
    }

    return(
        <>
        <Wrapper key={id}>
            <Image src={thumbnail} alt=''/>
            <PriceWrapper>
                <Price>{priceFormatter.format(price)}</Price>
            <RemoveButton onClick={handleRemove}><XCircle size={30}/></RemoveButton>
            </PriceWrapper>
        </Wrapper>
        </>
    )
}