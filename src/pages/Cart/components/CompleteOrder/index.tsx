import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { ChoiceProductContext } from '../../../../context/ChoiceProductContext'
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

export function CompleteOrder() {
  const {
    cep,
    setCep,
    deliveryAddress,
    setDeliveryAddress,
    inputCep,
    setInputCep,
    street,
    setStreet,
    houseNumber,
    setHouseNumber,
    complementInfo,
    setComplementInfo,
    district,
    setDistrict,
    city,
    setCity,
    federativeUnit,
    setFederativeUnit,
  } = useContext(ChoiceProductContext)

  useEffect(() => {
    let address = {}
    if (cep) {
      address = {
        cep: cep.cep,
        street: cep.logradouro || street,
        houseNumber,
        complementInfo,
        district: cep.bairro || district,
        city: cep.localidade || city,
        federativeUnit: cep.uf || federativeUnit,
      }
      setDeliveryAddress(address)
    }
  }, [
    cep,
    city,
    complementInfo,
    district,
    federativeUnit,
    houseNumber,
    setDeliveryAddress,
    street,
  ])

  useEffect(() => {
    if (inputCep && inputCep.length === 8) {
      const fetchData = async () => {
        const response = await api.get(`${inputCep}/json`)
        setCep(response.data)
        setInputCep(response.data.cep)
      }

      fetchData()
    }
  }, [inputCep, setCep, setInputCep])

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
            id="cep"
            placeholder="CEP"
            maxLength={8}
            defaultValue={cep ? cep.cep : inputCep}
            onChange={(e) => setInputCep(e.target.value)}
          />
          <Street
            placeholder="Rua"
            defaultValue={cep ? cep.logradouro : ''}
            onChange={(e) => setStreet(e.target.defaultValue)}
          />
          <InfoHouse>
            <HouseNumber
              placeholder="Número"
              defaultValue={deliveryAddress.houseNumber || ''}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
            <ComplementInfo
              placeholder="Complemento"
              defaultValue={deliveryAddress.complementInfo || ''}
              onChange={(e) => setComplementInfo(e.target.value)}
            />
          </InfoHouse>
          <DistrictInfo>
            <District
              placeholder="Bairro"
              defaultValue={cep ? cep.bairro : ''}
              onChange={(e) => setDistrict(e.target.defaultValue)}
            />
            <City
              placeholder="Cidade"
              defaultValue={cep ? cep.localidade : ''}
              onChange={(e) =>
                e.target.value
                  ? setCity(e.target.value)
                  : setCity(e.target.defaultValue)
              }
            />
            <FederativeUnit
              maxLength={2}
              placeholder="UF"
              defaultValue={cep ? cep.uf : ''}
              onChange={(e) => setFederativeUnit(e.target.defaultValue)}
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
