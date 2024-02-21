import { Link } from "react-router-dom";
import { Header, LogoWrapper, ContentContainer, DropDownWrapper } from './appstyle'
import { Bag } from "phosphor-react";

import { Cart } from "./components/Cart/Cart";
import { DropDown } from "./components/Dropdown/Dropdown";
import { Home } from "../../pages/home";


export function AppLayout(){


    return(
        <>


        <Header>
        <LogoWrapper>
        <span>S</span>
        <Bag size={28} weight="bold"/>
        <span>ORP!</span>
        </LogoWrapper>

        <DropDownWrapper>
            <Link to="/cart">
            <Cart/>
            </Link>
            <DropDown/>
        </DropDownWrapper>

        </Header>
        
        <ContentContainer>
        <Home/>
        </ContentContainer>

       

        </>
    )
}