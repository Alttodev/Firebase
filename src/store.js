import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './features/Product/ProductSlice'

export default configureStore({
    reducer: {
      product: ProductReducer,
  }
})