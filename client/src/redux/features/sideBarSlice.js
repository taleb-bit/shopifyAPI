import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const sideBarReducer = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveItem } = sideBarReducer.actions;
export default sideBarReducer.reducer;
