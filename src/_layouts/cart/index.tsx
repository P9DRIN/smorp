
import { ProductContext } from '../../context/ProductContext'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSum } from '../../hooks/useSum'
import { priceFormatter } from '../../utils/priceFormatter'
import { DropDown } from '../appLayout/components/Dropdown/Dropdown'
import { ItemCard } from './components/ItemCard'
import { Container, Header, Main, PriceWrapper, 
BuyButton, Logo, NoCartItems } from './style'
import { Bag, CreditCard, PlusCircle } from 'phosphor-react'
import { SecurityIcon } from './components/SecurityIcon'

export function CartPage(){

    const sum = useSum()

    const navigate = useNavigate();
    const [showLockIcon, setShowLockIcon] = useState(false)
    const { cartItems } = useContext(ProductContext)


    function isDisabled(){
        const reason = cartItems.length
        if(reason > 1) return false
        if(reason == 0 ) return true
    }


    function handleCheckout(){
        const finalValue = (sum.totalValue)
        setShowLockIcon(!showLockIcon)
        localStorage.setItem('totalValue', JSON.stringify(finalValue))
        setTimeout(() => {
            navigate('/payment')
        }, 2000)
    }

    return(
        <>
            <Container>
                <Header>
                    <Link to="/" className='link'>
                    <Logo>
                    <span>S</span>
                    <Bag size={28} weight="bold"/>
                    <span>ORP!</span>
                    </Logo>
                    </Link>
                    <DropDown/>
                </Header>
                <Main>
                    {
                    showLockIcon ?
                        <SecurityIcon/>
                    :
                    (
                    cartItems.length ? 
                       cartItems.map((prod) =>
                       <>
                           <ItemCard key={prod._id} data={prod} />
                       </>
                    )
                        :
                        <>
                           <Link to="/"><NoCartItems><PlusCircle size={28}/>Add new items! </NoCartItems></Link>
                        </>
                    )
                }
                </Main>

                <PriceWrapper>
                    <BuyButton onClick={handleCheckout} disabled={isDisabled()}><CreditCard size={28}/></BuyButton>
                <div>Total: <span>{priceFormatter.format(sum.totalValue)}</span></div>
                </PriceWrapper>
            </Container>
        </>
    )
}