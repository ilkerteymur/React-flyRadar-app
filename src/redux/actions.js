import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helpers/constants";
import axios from "axios";

/*
! createAsyncThunk
* Hem asenkron işlemler (api istekleri) yapabilen
* Hem de bunların sonucunu store'a aktarabilen 
* asenkron aksiyonu olusturmamızı saglayan method
*/

export const getFlights = createAsyncThunk("flights/getFlight", async () => {
  // api a istek atma
  const res = await axios.request(options);

  //   bize gelen dizileri objelere cevirme
  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));

  //   veriyi slice a aktarma
  return newData;
});
