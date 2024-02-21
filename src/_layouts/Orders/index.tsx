import { Link } from "react-router-dom";
import { Container, Header, Logo, OrderList } from "./style";
import { Bag } from "phosphor-react";
import { DropDown } from "../appLayout/components/Dropdown/Dropdown";
import { OrderComponent } from "./OrderComponent";
import { OrderContext } from "../../context/OrderContext";
import { Loading } from "../../components/Loading";
import { useContext, useEffect } from "react";


export function OrdersPage(){

    const { order, fetchOrders } = useContext(OrderContext)

    useEffect(() => {
        fetchOrders()
    }, [])

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
            <OrderList>
            {
            order.length ?
            order.map((ord) => <OrderComponent key={ord.orderNum} data={ord} />)
            :
            <div className="mid">
            <Loading/>
            </div>
            }
        
            </OrderList>
        </Container>

        </>
    )
}