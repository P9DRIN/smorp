import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./_layouts/appLayout/app";
import { Auth } from "./_layouts/auth/auth";
import { Home } from "./pages/home";
import { Register } from "./_layouts/register/register";
import { CartPage } from "./_layouts/cart";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [{
            path: '/', element: <Home/>
        }],
    },
    {
        path: '/auth',
        element: <Auth/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/cart',
        element: <CartPage/>
    }
])