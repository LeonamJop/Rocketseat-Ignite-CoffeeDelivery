import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

interface ChoiceProductType {
  product: any
  setProduct: Dispatch<SetStateAction<any>>
  handleFormatValue: any
}

export const ChoiceProductContext = createContext({} as ChoiceProductType)

interface ChoiceProductContextPorviderProps {
  children: ReactNode
}

export function ChoiceProductContextPorvider({
  children,
}: ChoiceProductContextPorviderProps) {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const productJSON = JSON.stringify(product)
    localStorage.setItem('todoList', productJSON)
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
      }}
    >
      {children}
    </ChoiceProductContext.Provider>
  )
}
