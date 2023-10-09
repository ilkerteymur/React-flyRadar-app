export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.047182",
    bl_lng: "24.992627",
    tr_lat: "42.705437",
    tr_lng: "44.549525",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "c5fbafb69emsh904b0562102575bp13afe9jsn59e938df8dcd",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOpt = {
  headers: {
    "X-RapidAPI-Key": "c5fbafb69emsh904b0562102575bp13afe9jsn59e938df8dcd",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
