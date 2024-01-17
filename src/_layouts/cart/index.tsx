
import { DropDown } from '../appLayout/components/Dropdown/Dropdown'
import { ItemCard } from './components/ItemCard'

import { Container, Header, Main, PriceWrapper, BuyButton, Logo } from './style'
import { Bag, CreditCard } from 'phosphor-react'
import { priceFormatter } from '../../utils/priceFormatter'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'
import { useSum } from '../../hooks/useSum'

export function CartPage(){

    const { cartItems } = useContext(ProductContext)

    const sum = useSum()

    return(
        <>
            <Container>
                <Header>
                    <Link to="/" className='link'>
                    <Logo>
                    <span>S</span>
                    <Bag size={28} weight="bold"/>
                    <span>orp!</span>
                    </Logo>
                    </Link>
                    <DropDown/>
                </Header>
                <Main>
                    {
                       cartItems.map((prod) =>
                           <ItemCard key={prod.id} data={prod} />
                       )
                    }
                <PriceWrapper>
                <BuyButton><CreditCard size={28}/></BuyButton>
                <div>Total: <span>{priceFormatter.format(sum.totalValue)}</span></div>
                </PriceWrapper>
                </Main>
            </Container>
        </>
    )
}