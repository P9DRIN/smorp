import { DataItems } from '../../../@types/product'
import { priceFormatter } from '../../../utils/priceFormatter'
import { Wrapper, Image, PriceWrapper, Price } from './style'

export function ItemCard({data}: DataItems){

    const { id, thumbnail, price } = data

    return(
        <>
        <Wrapper key={id}>
            <Image src={thumbnail} alt=''/>
            <PriceWrapper>
                <Price>{priceFormatter.format(price)}</Price>
            </PriceWrapper>
        </Wrapper>
        </>
    )
}