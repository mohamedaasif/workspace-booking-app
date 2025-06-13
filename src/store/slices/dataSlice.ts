import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type DataState = {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
};

const initialState: DataState = {
  items: [],
  status: "idle",
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
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
