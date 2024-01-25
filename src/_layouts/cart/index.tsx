
import { ProductContext } from '../../context/ProductContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSum } from '../../hooks/useSum'
import { priceFormatter } from '../../utils/priceFormatter'
import { DropDown } from '../appLayout/components/Dropdown/Dropdown'
import { ItemCard } from './components/ItemCard'

import { Container, Header, Main, PriceWrapper, 
BuyButton, Logo, NoCartItems } from './style'
import { Bag, CreditCard, PlusCircle } from 'phosphor-react'

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
                    cartItems.length ? 
                       cartItems.map((prod) =>
                       <>
                           <ItemCard key={prod.id} data={prod} />
                       </>
                    )
                        :
                        <>
                           <Link to="/"><NoCartItems><PlusCircle size={28}/>Add new items! </NoCartItems></Link>
                        </>
                    }
                </Main>
                <PriceWrapper>
                <Link to="/success"><BuyButton><CreditCard size={28}/></BuyButton></Link>
                <div>Total: <span>{priceFormatter.format(sum.totalValue)}</span></div>
                </PriceWrapper>
            </Container>
        </>
    )
}