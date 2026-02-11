import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { params } from "../../utils/constants";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const res = await api.get("/flights/list-in-boundary", { params });

  const formatted = res.data.aircraft.map(() => ({
    flightId: i[0],
    callsign: i[1],
    lat: i[2],
    lon: i[3],
    direction: i[4],
    altitude: i[5],
    speed: i[6],
  }));

  console.log(formatted);

  return formatted;
});
