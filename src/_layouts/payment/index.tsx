import { Link } from "react-router-dom";
import { AddressContainer, Container, Header, PaymentForm, RadioContainer } from "./style";
import { Radio } from "./components/radio";
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { priceFormatter } from "../../utils/priceFormatter";

type formInputs = {
    paymentMethod: 'credit' | 'debit' | 'pix'
}


const newOrder = z.object({
    paymentMethod: z.enum(['credit', 'debit', 'pix'], {
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
    const parsedFinalValue = parseFloat(sumStorage)
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<formInputs>({
        resolver: zodResolver(newOrder)
    })

    const selectedPaymentMethod = watch('paymentMethod')

    function testFunction(){
        localStorage.setItem('paymentMethod', JSON.stringify(selectedPaymentMethod))
    }

    return(
        <>
           <Header>
                <Link to="/"><span>SMORP!</span></Link>
            </Header>
        <Container>
        <div className="welcome">
        <b>Nome</b>
        <h1> Finalize sua compra</h1>
        </div>
            <AddressContainer>
                <span>Endereço de entrega:</span>
                <span>Rua, numero. Cep. Cidade - Estado</span>
                <span>Previsão de entrega: 7 dias</span>
            </AddressContainer>
            <PaymentForm onSubmit={handleSubmit(testFunction)}>

            <RadioContainer>

                <div className="credit">
            <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                  />
                <span>Cartão de crédito</span>
                  </div>
                  <div className="debit">
            <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                  />
                <span>Cartão de Débito</span>
                
                  </div>

                  <div className="pix">
            <Radio
                  isSelected={selectedPaymentMethod === 'pix'}
                  {...register('paymentMethod')}
                  value="pix"
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
                    <span>{priceFormatter.format(parsedFinalValue)}</span>
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