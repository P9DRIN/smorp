import { Link, Outlet } from "react-router-dom";
import { Header, LogoWrapper, ContentContainer, DropDownWrapper } from './appstyle'
import { Bag } from "phosphor-react";

import { Cart } from "./components/Cart/Cart";
import { DropDown } from "./components/Dropdown/Dropdown";


export function AppLayout(){
    return(
        <>
        <Header>
        <LogoWrapper>
        <span>S</span>
        <Bag size={28} weight="bold"/>
        <span>orp!</span>
        </LogoWrapper>

        <DropDownWrapper>
            <Link to="/cart">
            <Cart/>
            </Link>
            <DropDown/>
        </DropDownWrapper>

        </Header>
        <ContentContainer>
        <Outlet/>
        </ContentContainer>

        </>
    )
}