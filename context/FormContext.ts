import { createContext, useState, useContext } from 'react'

interface CakeData {
  shape: string
  size: string
  flavor: string
  frostingType: string
  frostingcolour: string
  toppings: string[]
  message: string
  deliveryDate: string
  deliveryTime: string
  deliveryAddress: string
  deliveryInstructions: string
  totalFee: number
}

interface FormContextProps {
  pageTitle: {
    [key: number]: string
  }
  page: number
  setPage: (page: number) => void
  cakeData: CakeData
  setCakeData: (cakeData: CakeData) => void
}

export const FormContext = createContext<FormContextProps>({
  pageTitle: {
    0: 'Shape and Size',
    1: 'Flavor',
    2: 'Frosting',
    3: 'Toppings and message',
    4: 'Delivery,Pickup and Payment',
  },
  page: 0,
  setPage: () => {},
  cakeData: {
    shape: '',
    size: '',
    flavor: '',
    frostingType: '',
    frostingcolour: '',
    toppings: [''],
    message: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryAddress: '',
    deliveryInstructions: '',
    totalFee: 0,
  },
  setCakeData: () => {},
})

interface FormProviderProps {
  children: React.ReactNode
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [page, setPage] = useState(0)
  const [cakeData, setCakeData] = useState<CakeData>({
    shape: '',
    size: '',
    flavor: '',
    frostingType: '',
    frostingcolour: '',
    toppings: [''],
    message: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryAddress: '',
    deliveryInstructions: '',
    totalFee: 0,
  })

  return (
    <FormContext.Provider
      value={{ pageTitle, page, setPage, cakeData, setCakeData }}
    >
      {children}
    </FormContext.Provider>
  )
}
