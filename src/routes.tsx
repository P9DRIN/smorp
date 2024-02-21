import { AppLayout } from "./_layouts/appLayout/app";
import { Auth } from "./_layouts/auth/auth";
import { Register } from "./_layouts/register/register";
import { CartPage } from "./_layouts/cart";
import { Success } from "./_layouts/success";
import { PaymentPage } from "./_layouts/payment";
import { ProfilePage } from "./_layouts/register/profile";
import { OrdersPage } from "./_layouts/Orders";
import { Route, Routes, Navigate } from 'react-router-dom';
import { Fragment, ReactNode, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Loading } from "./components/Loading";
import { LoaderContainer } from "./components/Loading/style";
import { OrderPage } from "./_layouts/Order";

interface RouterProps {
    children: ReactNode
}


const Private = ({ children }: RouterProps) => {

    const { Authenticated, loading } = useContext(AuthContext);

    if(loading){
        return(
            <>
            <LoaderContainer/>
            <Loading/>
            </>
            )
    }
    if(!Authenticated){
        return <Navigate to='/auth'/>
    }
    return children;
}


const RoutesApp = () => {
    return(
        <Fragment>

            <Routes>

                <Route path="/" element={<AppLayout/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/register" element={<Register/>}/>

                <Route path="/cart" element={<Private><CartPage/></Private>}/>
                <Route path="/payment" element={<Private><PaymentPage/></Private>}/>
                <Route path="/profile" element={<Private><ProfilePage/></Private>}/>
                <Route path="/orders" element={<Private><OrdersPage/></Private>}>
                </Route>
                    <Route path='orders/:id' element={<OrderPage/>}/>
                <Route path="/success" element={<Private><Success/></Private>}/>

            </Routes>
        </Fragment>
    )
}

export default RoutesApp;

