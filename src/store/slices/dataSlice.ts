import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type DataState = {
  items: any[];
  isLoading: boolean;
  error: string | null | undefined;
};

const initialState: DataState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
