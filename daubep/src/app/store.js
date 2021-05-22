import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { counterSlice } from '../features/counter/counterSlice';
import cookReducer, { cookSlice } from '../trangDauBep/features/cook/cookSlice';
import khachHangReducer, { khachHangSlice } from '../trangKhachHang/features/khachHang/khachHangSlice';

export const store = configureStore({
  reducer: {
    counter1: cookReducer,
    counter2: khachHangReducer
  },
});
