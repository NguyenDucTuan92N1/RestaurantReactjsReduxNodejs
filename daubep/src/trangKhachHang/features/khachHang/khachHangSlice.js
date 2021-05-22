import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 0: show trang khách hàng
// 1: show trang giỏ hàng
// 2: show trang cá nhân khách hàng

const initialState = {
  value: 0, 
  status: 'idle',
};

export const khachHangSlice = createSlice({
  name: 'cooker',
  initialState,
 
  reducers: {
    showTrangChu: (state) => {
      state.value = 0;
    },
    showGioHang: (state) => {
      state.value = 1;
    },
    showTrangCaNhan: (state) => {
      state.value = 2;
    },
  },
});

export const { showTrangChu, showGioHang, showTrangCaNhan } = khachHangSlice.actions;

export const selectShow = (state) => state.counter2.value;

export default khachHangSlice.reducer;
