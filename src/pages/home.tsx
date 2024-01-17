import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Container } from './homestyle'

interface productStateProps {
    id: string,
    price: number,
    thumbnail: string,
}

export function Home(){
    
    const [ product, setProduct ] = useState<productStateProps[]>([])

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLB/search?q=iphone')
        .then((response) => response.json())
        .then((data) => setProduct(data.results))
    }, [])

    return(
        <>
        <Container>
            {product.map((prod) => <Card key={prod.id} data={prod} />)}
        </Container>
        </>
    )
}