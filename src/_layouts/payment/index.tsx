import { Link, useNavigate } from "react-router-dom";
import { AddressContainer, Container, Header, PaymentForm, RadioContainer } from "./style";
import { Radio } from "./components/radio";
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { priceFormatter } from "../../utils/priceFormatter";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

type formInputs = {
    paymentMethod: 'Credito' | 'Debito' | 'Pix'
}


const newOrder = z.object({
    paymentMethod: z.enum(['Credito', 'Debito', 'Pix'], {
        invalid_type_error: 'Informe um método de pagamento',
    })
})

export type OrderInfo = z.infer<typeof newOrder>

export function PaymentPage(){

    const valueStorage = localStorage.getItem('totalValue') || '';
    const parsedValue = JSON.parse(valueStorage);
    const totalCart = parseFloat(parsedValue)
    const deliveryTax = 25
    const sumStorage = parsedValue + deliveryTax
    const navigate = useNavigate()

    const { info } = useContext(AuthContext)
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<formInputs>({
        resolver: zodResolver(newOrder)
    })

    const selectedPaymentMethod = watch('paymentMethod')

    async function submitOrder(){
        const unparsedEmail = localStorage.getItem('user') || ''
        const email = JSON.parse(unparsedEmail)
        const unparsedItems = localStorage.getItem('items') || ''
        const items = JSON.parse(unparsedItems)

        const paymentMethod = selectedPaymentMethod
        const totalValue = JSON.stringify(sumStorage)
        

       await api.post(`/acc/${email.email}/orders`, {
            email,
            items,
            paymentMethod,
            totalValue,
            deliveryTax,
       })
       
       localStorage.removeItem('items')
       localStorage.removeItem('totalValue')
       localStorage.removeItem('paymentMethod')
       navigate('/success')

    }


    return(
        <>
           <Header>
                <Link to="/"><span>SMORP!</span></Link>
            </Header>
        <Container>
        <div className="welcome">
        <b>{info?.fullName}</b>
        <h1> Finalize sua compra</h1>
        </div>
            <AddressContainer>
                <span>Endereço de entrega:</span>
                {
                    info?.address.map((info) => {
                        return (
                            <>
                            <span className="address">
                            {info.street}, {info.houseNumber} - {info.zipCode} <br/> {info.city} - {info.federalUnit}
                            </span>
                           
                            </>
                        )
                    })
                }
                <span className="address">Previsão de entrega: 5 dias</span>
            </AddressContainer>
            <PaymentForm onSubmit={handleSubmit(submitOrder)}>

            <RadioContainer>

                <div className="credit">
            <Radio
                  isSelected={selectedPaymentMethod === 'Credito'}
                  {...register('paymentMethod')}
                  value="Credito"
                  />
                <span>Cartão de crédito</span>
                  </div>
                  <div className="debit">
            <Radio
                  isSelected={selectedPaymentMethod === 'Debito'}
                  {...register('paymentMethod')}
                  value="Debito"
                  />
                <span>Cartão de Débito</span>
                
                  </div>

                  <div className="pix">
            <Radio
                  isSelected={selectedPaymentMethod === 'Pix'}
                  {...register('paymentMethod')}
                  value="Pix"
                  />
                  <span>Pix</span>
                  </div>
                <div>
                <span>{priceFormatter.format(totalCart)}</span>
                <span>Total do carrinho:</span>
                </div>
                <div>
                    <span>{priceFormatter.format(deliveryTax)}</span>
                    <span>Taxa de entrega:</span>
                </div>
                <div>
                    <span>{priceFormatter.format(sumStorage)}</span>
                    <span>Total final:</span>
                </div>
             
            </RadioContainer>

            <button type="submit" className="pay">Pagar</button>

            {errors.paymentMethod ? (
                <h1>{errors.paymentMethod.message}</h1>
            )
                : null
        }
            </PaymentForm>



        </Container>
        </>
    )
}