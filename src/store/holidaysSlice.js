import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchHolidays = createAsyncThunk(
  'holidays/fectchHolidays',
  async () => {
    const res = await fetch(URI_API);
    const data = await res.json();
    return data;
  }
);

const holidaysSlice = createSlice({
  name: 'holidays',
  initialState: {
    holidays: {},
    holiday: '',
    loading: '',
    error: ''
  },
  reducers: {
    setHoliday(state, action) {
      state.holiday = action.payload;
    }
  },
  extraReducers: {
    [fetchHolidays.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchHolidays.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.holidays = action.payload;
    },
    [fetchHolidays.rejected]: (state) => {
      state.loading = 'failed';
      state.holidays = {};
    },
  }
});

export const {setHoliday} = holidaysSlice.actions;

export default holidaysSlice.reducer;

