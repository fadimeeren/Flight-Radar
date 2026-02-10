import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { params } from "../../utils/constants";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const res = await api.get("/flights/list-in-boundary", { params });

  res.data.aircraft.map(() => ({
    flightId: i[0],
  }));

  return "payload";
});
