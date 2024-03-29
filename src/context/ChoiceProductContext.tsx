import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

interface CepProps {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

interface ChoiceProductType {
  product: any
  setProduct: Dispatch<SetStateAction<any>>
  deliveryAddress: any
  setDeliveryAddress: Dispatch<SetStateAction<any>>
  paymentTypeSelected: string
  setPaymentTypeSelected: Dispatch<SetStateAction<string>>

  handleFormatValue: any
  cep: any
  setCep: Dispatch<SetStateAction<any>>
  inputCep: string
  setInputCep: Dispatch<SetStateAction<string>>
  street: string
  setStreet: Dispatch<SetStateAction<string>>
  houseNumber: string
  setHouseNumber: Dispatch<SetStateAction<string>>
  complementInfo: string
  setComplementInfo: Dispatch<SetStateAction<string>>
  district: string
  setDistrict: Dispatch<SetStateAction<string>>
  city: string
  setCity: Dispatch<SetStateAction<string>>
  federativeUnit: string
  setFederativeUnit: Dispatch<SetStateAction<string>>
  existsEmptyFields: boolean
}

export const ChoiceProductContext = createContext({} as ChoiceProductType)

interface ChoiceProductContextPorviderProps {
  children: ReactNode
}

export function ChoiceProductContextPorvider({
  children,
}: ChoiceProductContextPorviderProps) {
  const [product, setProduct] = useState([])
  const [deliveryAddress, setDeliveryAddress] = useState({})
  const [paymentTypeSelected, setPaymentTypeSelected] = useState('')

  const [cep, setCep] = useState<CepProps>()
  const [existsEmptyFields, setExistsEmptyFields] = useState(false)

  const [inputCep, setInputCep] = useState('')
  const [street, setStreet] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [complementInfo, setComplementInfo] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [federativeUnit, setFederativeUnit] = useState('')

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(product))
    localStorage.setItem('deliveryAddress', JSON.stringify(deliveryAddress))
    localStorage.setItem(
      'paymentTypeSelected',
      JSON.stringify(paymentTypeSelected),
    )
  }, [deliveryAddress, paymentTypeSelected, product])

  function handleFormatValue(item: number) {
    return String(item.toFixed(2)).replace('.', ',')
  }

  useEffect(() => {
    if (deliveryAddress) {
      for (const indice in deliveryAddress) {
        if (deliveryAddress[indice as keyof typeof deliveryAddress] === '') {
          return setExistsEmptyFields(true)
        }
      }
    }
    return setExistsEmptyFields(false)
  }, [deliveryAddress])

  return (
    <ChoiceProductContext.Provider
      value={{
        product,
        setProduct,
        handleFormatValue,
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
        existsEmptyFields,
        paymentTypeSelected,
        setPaymentTypeSelected,
      }}
    >
      {children}
    </ChoiceProductContext.Provider>
  )
}
