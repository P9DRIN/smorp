import { Link } from "react-router-dom";
import { Container, Header, Logo } from "./style";
import { Bag, CaretRight, Check } from "phosphor-react";
import { DropDown } from "../appLayout/components/Dropdown/Dropdown";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export function Success(){

    const { info } = useContext(AuthContext)

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
        <div className="transitionWrapper">
        <div className="circle"><Check weight="bold"/></div>
        </div>
        <h1 className="success">SUCESSO!</h1>
        <span className="confirmedOrderTag">Pedido<b> confirmado.</b></span>
        <div className="infoContainer">
            <span className="fullName">{info?.fullName},<br/></span>
            <span>Neste momento, <b>seu pedido</b> está sendo preparado!<br/> Logo estará a caminho de você!</span>
        </div>
        <Link to="/orders">
            <span className="orders">Ver <b> meus pedidos... </b> <CaretRight size={24}/></span>
        </Link>
        </Container>

        </>
    )
}