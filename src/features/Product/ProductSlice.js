   import { createSlice } from '@reduxjs/toolkit';

   const initialState = {
     value: 0,
   };

   export const ProductSlice = createSlice({
     name: 'product',
     initialState,
     reducers: {
       increment: (state) => {
         state.value += 1;
       },
       decrement: (state) => {
         state.value = Math.max(state.value - 1, 0);
       },
     
       incrementByAmount: (state, action) => {
         state.value += action.payload;
       },
     },
   });

   export const { increment, decrement, incrementByAmount } = ProductSlice.actions;

   export default ProductSlice.reducer;