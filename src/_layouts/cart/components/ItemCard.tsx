import { XCircle } from 'phosphor-react'
import { CartItems, DataItems } from '../../../@types/product'
import { priceFormatter } from '../../../utils/priceFormatter'
import { Wrapper, Image, PriceWrapper, Price, RemoveButton } from './style'
import { useContext } from 'react'
import { ProductContext } from '../../../context/ProductContext'



export function ItemCard({data}: DataItems){

    const { _id, productName, productImage, productPrice, productLDescription, productSDescription } = data

    const { cartItems, fetchProducts } = useContext(ProductContext);

    

    function handleRemove(){

        const unParseCartItemsStorage = localStorage.getItem('items') || '';
        const cartItemsLocalStorage = JSON.parse(unParseCartItemsStorage)

        if(cartItems){
            const search = cartItems.findIndex((e) => e._id == _id)
            
            const localSearch = cartItemsLocalStorage.findIndex((e: CartItems) => e._id == _id)

            if(search > -1){
                cartItems.splice(search, 1)

                cartItemsLocalStorage.splice(localSearch, 1)

                localStorage.setItem('items', JSON.stringify(cartItemsLocalStorage))

                fetchProducts(cartItems)// não existem parametros nessa função! 
            }
        }
    }
    return(
        <>
        <Wrapper key={_id}>
            <Image src={productImage} alt=''/>
            <PriceWrapper>
                <Price>{priceFormatter.format(productPrice)}</Price>
            <RemoveButton onClick={handleRemove}><XCircle size={30}/></RemoveButton>
            </PriceWrapper>
        </Wrapper>
        </>
    )
}