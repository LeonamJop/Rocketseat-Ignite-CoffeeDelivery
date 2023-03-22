import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import React, { useContext, useEffect, useState } from 'react'
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

export interface isActiveProps {
  border: string
  backgroundColor: string
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

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
    paymentTypeSelected,
    setPaymentTypeSelected,
  } = useContext(ChoiceProductContext)
  const [isCepInvalid, setIsCepInvalid] = useState(false)
  const [creditCardActive, setCreditCardActive] = useState(false)
  const [debitCardActive, setDebitCardActive] = useState(false)
  const [moneyActive, setMoneyActive] = useState(false)

  useEffect(() => {
    let address = {}
    if (cep) {
      address = {
        cep: cep.cep,
        street: cep.logradouro,
        houseNumber,
        complementInfo,
        district: cep.bairro,
        city: cep.localidade,
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
        if (!response.data.erro) {
          setCep(response.data)
          setInputCep(response.data.cep)
          setIsCepInvalid(false)
        } else {
          alert('Insira um cep válido')
          setIsCepInvalid(true)
          setCep('')
          setDeliveryAddress({})
        }
      }

      fetchData()
    }
  }, [inputCep, setCep, setDeliveryAddress, setInputCep])

  // useEffect(() => {
  //   if (paymentTypeSelected.length){

  //   }
  // },[])

  const isCepEmpty = !cep || isCepInvalid

  function creditCardSelected() {
    setCreditCardActive(true)
    setDebitCardActive(false)
    setMoneyActive(false)
    setPaymentTypeSelected('credit')
  }

  function debitCardSelected() {
    setCreditCardActive(false)
    setDebitCardActive(true)
    setMoneyActive(false)
    setPaymentTypeSelected('debit')
  }

  function moneySelected() {
    setCreditCardActive(false)
    setDebitCardActive(false)
    setMoneyActive(true)
    setPaymentTypeSelected('money')
  }

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
            disabled={isCepEmpty}
            placeholder="Rua"
            value={cep ? cep.logradouro : ''}
            onChange={(e) => setStreet(e.target.value)}
          />
          <InfoHouse>
            <HouseNumber
              disabled={isCepEmpty}
              placeholder="Número"
              value={deliveryAddress.houseNumber || ''}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
            <ComplementInfo
              disabled={isCepEmpty}
              placeholder="Complemento"
              value={deliveryAddress.complementInfo || ''}
              onChange={(e) => setComplementInfo(e.target.value)}
            />
          </InfoHouse>
          <DistrictInfo>
            <District
              disabled={isCepEmpty}
              placeholder="Bairro"
              value={cep ? cep.bairro : ''}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <City
              disabled={isCepEmpty}
              placeholder="Cidade"
              value={cep ? cep.localidade : ''}
              onChange={(e) => setCity(e.target.value)}
            />
            <FederativeUnit
              disabled={isCepEmpty}
              maxLength={2}
              placeholder="UF"
              value={cep ? cep.uf : ''}
              onChange={(e) => setFederativeUnit(e.target.value)}
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
          <PaymentTypeButton
            onClick={creditCardSelected}
            backgroundColor={creditCardActive ? '#EBE5F9' : '#E6E5E5'}
            border={creditCardActive ? '1px solid #8047F8' : 'none'}
          >
            <CreditCard size={16} />
            <span>Cartão de crédito</span>
          </PaymentTypeButton>
          <PaymentTypeButton
            onClick={debitCardSelected}
            backgroundColor={debitCardActive ? '#EBE5F9' : '#E6E5E5'}
            border={debitCardActive ? '1px solid #8047F8' : 'none'}
          >
            <Bank size={16} />
            <span>cartão de débito</span>
          </PaymentTypeButton>
          <PaymentTypeButton
            onClick={moneySelected}
            backgroundColor={moneyActive ? '#EBE5F9' : '#E6E5E5'}
            border={moneyActive ? '1px solid #8047F8' : 'none'}
          >
            <Money size={16} />
            <span>dinheiro</span>
          </PaymentTypeButton>
        </PaymentType>
      </FormPayment>
    </ComplementOrderContainer>
  )
}
