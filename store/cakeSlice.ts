import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

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

const initialState: CakeData = {
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
}

export const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    setCakeData: (state, action: PayloadAction<CakeData>) => {
      state = action.payload
    },
  },
})

export const { setCakeData } = cakeSlice.actions

export default cakeSlice.reducer
