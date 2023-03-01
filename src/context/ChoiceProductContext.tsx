import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

interface cepProps {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

interface ChoiceProductType {
  product: any
  setProduct: Dispatch<SetStateAction<any>>
  handleFormatValue: any
  cep: any
  setCep: Dispatch<SetStateAction<any>>
}

export const ChoiceProductContext = createContext({} as ChoiceProductType)

interface ChoiceProductContextPorviderProps {
  children: ReactNode
}

export function ChoiceProductContextPorvider({
  children,
}: ChoiceProductContextPorviderProps) {
  const [product, setProduct] = useState([])
  const [cep, setCep] = useState<cepProps>()

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(product))
  }, [product])

  function handleFormatValue(item: number) {
    return String(item.toFixed(2)).replace('.', ',')
  }

  return (
    <ChoiceProductContext.Provider
      value={{
        product,
        setProduct,
        handleFormatValue,
        cep,
        setCep,
      }}
    >
      {children}
    </ChoiceProductContext.Provider>
  )
}
