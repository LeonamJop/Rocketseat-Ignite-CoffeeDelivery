import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CEP,
  City,
  ComplementInfo,
  ComplementOrderContainer,
  District,
  DistrictInfo,
  FederativeUnit,
  Form,
  FormContainer,
  FormHeader,
  FormPayment,
  HouseNumber,
  InfoHouse,
  PaymentType,
  PaymentTypeButton,
  Street,
} from './styles'

export function CompleteOrder() {
  return (
    <ComplementOrderContainer>
      <h1>Complete seu pedido</h1>
      <FormContainer>
        <FormHeader>
          <MapPinLine color="#C47F17" size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHeader>
        <Form>
          <CEP placeholder="CEP" />
          <Street placeholder="Rua" />
          <InfoHouse>
            <HouseNumber placeholder="Número" />
            <ComplementInfo placeholder="Complemento" />
          </InfoHouse>
          <DistrictInfo>
            <District placeholder="Bairro" />
            <City placeholder="Cidade" />
            <FederativeUnit maxLength={2} placeholder="UF" />
          </DistrictInfo>
        </Form>
      </FormContainer>
      <FormPayment>
        <FormHeader>
          <CurrencyDollar color="#8047F8" size={22} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </FormHeader>
        <PaymentType>
          <PaymentTypeButton>
            <CreditCard size={16} />
            <span>Cartão de crédito</span>
          </PaymentTypeButton>
          <PaymentTypeButton>
            <Bank size={16} />
            <span>cartão de débito</span>
          </PaymentTypeButton>
          <PaymentTypeButton>
            <Money size={16} />
            <span>dinheiro</span>
          </PaymentTypeButton>
        </PaymentType>
      </FormPayment>
    </ComplementOrderContainer>
  )
}
