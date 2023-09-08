import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_billingdetails_list = createAsyncThunk(
  "billingDetails/api_v1_billingdetails_list",
  async payload => {
    const response = await apiService.api_v1_billingdetails_list(payload)
    return response.data
  }
)
export const api_v1_billingdetails_create = createAsyncThunk(
  "billingDetails/api_v1_billingdetails_create",
  async payload => {
    const response = await apiService.api_v1_billingdetails_create(payload)
    return response.data
  }
)
export const api_v1_billingdetails_retrieve = createAsyncThunk(
  "billingDetails/api_v1_billingdetails_retrieve",
  async payload => {
    const response = await apiService.api_v1_billingdetails_retrieve(payload)
    return response.data
  }
)
export const api_v1_billingdetails_update = createAsyncThunk(
  "billingDetails/api_v1_billingdetails_update",
  async payload => {
    const response = await apiService.api_v1_billingdetails_update(payload)
    return response.data
  }
)
export const api_v1_billingdetails_partial_update = createAsyncThunk(
  "billingDetails/api_v1_billingdetails_partial_update",
  async payload => {
    const response = await apiService.api_v1_billingdetails_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_billingdetails_destroy = createAsyncThunk(
  "billingDetails/api_v1_billingdetails_destroy",
  async payload => {
    const response = await apiService.api_v1_billingdetails_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const billingDetailsSlice = createSlice({
  name: "billingDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_billingdetails_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_billingdetails_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_billingdetails_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_billingdetails_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_billingdetails_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_billingdetails_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_billingdetails_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_billingdetails_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_billingdetails_list,
  api_v1_billingdetails_create,
  api_v1_billingdetails_retrieve,
  api_v1_billingdetails_update,
  api_v1_billingdetails_partial_update,
  api_v1_billingdetails_destroy,
  slice: billingDetailsSlice
}
