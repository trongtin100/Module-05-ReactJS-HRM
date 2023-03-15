import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createData,
  retrieveData,
  updateData,
} from "../services/airtable.service";
import { tableConfig } from "../utils/airtable";

const initialState = {
  loading: false,
  staff: null,
  error: null,
  success: false,
};
const staff = tableConfig("staff");

export const fetchStaffList = createAsyncThunk("staff/fetch", async () => {
  const res = await retrieveData({}, staff, "staff");
  return res;
});

export const createStaff = createAsyncThunk("staff/create", async (data) => {
  console.log("Create Staff: ", data);
  const res = await createData(staff, data, "staff");
  return res;
});

export const updateStaff = createAsyncThunk("staff/update", async (data) => {
  const { record_id, value } = data;
  console.log("Update Staff: ", data);
  const res = await updateData(record_id, staff, value, "staff");
  return res;
});

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaffList.pending, (state, action) => {
        state.success = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStaffList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.success = false;
      })
      .addCase(fetchStaffList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
      })

      .addCase(createStaff.pending, (state, action) => {
        state.success = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(createStaff.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(createStaff.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.success = true;
      })

      .addCase(updateStaff.pending, (state, action) => {
        state.success = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStaff.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateStaff.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.success = true;
      });
  },
});

export const selectLoading = (state) => state.staff.loading;
export const selectSuccess = (state) => state.staff.success;
export const selectStaff = (state) => state.staff.staff;

export default staffSlice.reducer;
