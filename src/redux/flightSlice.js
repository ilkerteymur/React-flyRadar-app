import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // cevap beklerken
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      //   olumlu cevap geldiginde
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
      })
      //   olumsuz cevap geldiginde
      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Uçuş verilerini alırken hata olustu";
      });
  },
});

export default flightSlice.reducer;

/*
  cevap beklerken
    [getFlights.pending]: (state) => {
      state.isLoading = true;
    },
     olumlu cevap geldıgınde
    [getFlights.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    },
     olumsuz cevap geldıgınde
    [getFlights.rejected]: (state) => {
      state.isLoading = false;
      state.isError = "Uçuş verilerini alırken hata olustu";
    },
*/
