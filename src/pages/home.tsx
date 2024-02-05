import { useContext } from "react";
import { Card } from "../components/Card";
import { Container } from './homestyle'
import { ProductContext } from "../context/ProductContext";
import { Loading } from "../components/Loading";

export function Home(){
    
    const { product } = useContext(ProductContext)

    return(
        <>
        <Container>
            
            {
            product.length ?
            product.map((prod) => <Card key={prod._id} data={prod} />)
            :
            <Loading/>
            }
        </Container>
        </>
    )
}