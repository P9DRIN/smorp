import { CaretRight } from "phosphor-react";
import { Container } from "./style";
import { Order } from "../../../context/OrderContext";
import { Link } from "react-router-dom";

interface dataProps {
    data: Order
    
}

export function OrderComponent({data}: dataProps ){

    const { orderNum } = data

    return(

        <>
        <Container>
            <div className="info">

                <div className="orderNum">
                <span><b>NÚMERO DO PEDIDO</b></span>
                <span className="num">{orderNum}</span>
                </div>

                <Link to={`/orders/${orderNum}`}>
                <button className="btn"><CaretRight weight="bold"/></button>
                </Link>


            </div>
        </Container>
        </>
    )

}