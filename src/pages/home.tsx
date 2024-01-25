import { useContext } from "react";
import { Card } from "../components/Card";
import { Container } from './homestyle'
import { ProductContext } from "../context/ProductContext";

export function Home(){
    
    const { product } = useContext(ProductContext)


    return(
        <>
        <Container>
            {product.map((prod) => <Card key={prod.id} data={prod} />)}
        </Container>
        </>
    )
}