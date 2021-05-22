import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};

export const cookSlice = createSlice({
  name: 'cooker',
  initialState,
 
  reducers: {
    showMenu: (state) => {
      state.value = 1;
    },
    showOrder: (state) => {
      state.value = 0;
    },
  },
});

export const { showMenu, showOrder } = cookSlice.actions;

export const selectShow = (state) => state.counter1.value;

export default cookSlice.reducer;
