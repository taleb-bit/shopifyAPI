import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getShopProductsData = createAsyncThunk(
  "shop/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/shop/products");
      return res.data.products;
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

export const shopProductsReducer = createSlice({
  name: "shopProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopProductsData.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getShopProductsData.fulfilled, (state, action) => {
      state.loading = true;
      state.data = state.payload;
      state.isSuccess = true;
    });

    builder.addCase(getShopProductsData.rejected, (state, action) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = state.payload;
    });
  },
});

export default shopProductsReducer.reducer;
