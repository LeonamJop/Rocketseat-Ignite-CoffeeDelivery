import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../../../../services/api'
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

type cepProps = {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export function CompleteOrder() {
  const [inputCep, setInputCep] = useState('')
  const [cep, setCep] = useState<cepProps>()

  useEffect(() => {
    if (inputCep && inputCep.length === 8) {
      const fetchData = async () => {
        const response = await api.get(`${inputCep}/json`)
        setCep(response.data)
      }

      fetchData()
    }
  }, [inputCep])

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
          <CEP
            placeholder="CEP"
            defaultValue={cep ? cep.cep : inputCep}
            onChange={(e) => setInputCep(e.target.value)}
          />
          <Street placeholder="Rua" defaultValue={cep ? cep.logradouro : ''} />
          <InfoHouse>
            <HouseNumber placeholder="Número" />
            <ComplementInfo placeholder="Complemento" />
          </InfoHouse>
          <DistrictInfo>
            <District
              placeholder="Bairro"
              defaultValue={cep ? cep.bairro : ''}
            />
            <City
              placeholder="Cidade"
              defaultValue={cep ? cep.localidade : ''}
            />
            <FederativeUnit
              maxLength={2}
              placeholder="UF"
              defaultValue={cep ? cep.uf : ''}
            />
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
