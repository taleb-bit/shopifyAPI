import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getShopOrdersData = createAsyncThunk(
  "shop/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/shop/orders");
      return res.data.orders;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  data: [],
  isSuccess: false,
  message: "",
  loading: false,
};

export const shopReducer = createSlice({
  name: "shopOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopOrdersData.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getShopOrdersData.fulfilled, (state, action) => {
      state.loading = true;
      state.data = state.payload;
      state.isSuccess = true;
    });

    builder.addCase(getShopOrdersData.rejected, (state, action) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = state.payload;
    });
  },
});

export default shopReducer.reducer;
