import { Link, useParams } from "react-router-dom";
import { Container, Header, Logo } from "./style";
import { Bag } from "phosphor-react";
import { DropDown } from "../appLayout/components/Dropdown/Dropdown";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { priceFormatter } from "../../utils/priceFormatter";
import { Loading } from "../../components/Loading";


export function OrderPage(){

    const { id } = useParams()
    const { order } = useContext(OrderContext)

    const foundOrder = order?.find((ord) => ord.orderNum == id)
    
    const foundOrderTotalValue = foundOrder?.totalValue ? parseFloat(foundOrder.totalValue).toFixed(2) : 0;

    
    return(
        <>
        <Header>
            <Link to="/">
            <Logo>
                <span>S</span>
                <Bag size={26} weight="bold"/>
                <span>ORP!</span>
            </Logo>
            </Link>
            <DropDown/>
        </Header>
        <Container>
            {
            order.length
            ?
            (
                <>
            <div className="orderDetailsTag" key={foundOrder?.orderNum}>
                <span>Detalhes do pedido</span>
                <span className="orderId">{foundOrder?.orderNum}</span>
            </div>
            {
                foundOrder?.items.map((item) => {
                    return(
                        <>
                        <div key={foundOrder.orderNum} className="contentWrapper">
                        <img alt='' src={`.${item.productImage}`} />
                        <div className="charWrapper">
                        <span>{item.productName}</span>
                        <span>{item.productSDescription}</span>
                        <span>{item.productLDescription}</span>
                        <span>{priceFormatter.format(item.productPrice)}</span>
                        </div>

                        </div>
                        </>
                    )
                })
            }
            <div className="finalInfoWrapper">
                <div className="payMethod">
                <span className="resStatic">Método de pagamento: </span>
                <span className="resApi">{foundOrder?.paymentMethod}</span>
                </div>
                <div className="delTax">
                <span className="resStatic">Total do frete:</span>
                <span className="resApi">R${foundOrder?.deliveryTax}</span>
                </div>
                <div className="finTotal">
                <span className="resStatic">Total Final: </span>
                <span className="resApi">R${foundOrderTotalValue}</span>
                </div>
               
            </div>
            </>
            )
            :
            <Loading/>
            }

        </Container>
        </>
    )
}