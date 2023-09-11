import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_reporting_list = createAsyncThunk(
  "reportings/api_v1_reporting_list",
  async payload => {
    const response = await apiService.api_v1_reporting_list(payload)
    return response.data
  }
)
export const api_v1_reporting_create = createAsyncThunk(
  "reportings/api_v1_reporting_create",
  async payload => {
    const response = await apiService.api_v1_reporting_create(payload)
    return response.data
  }
)
export const api_v1_reporting_retrieve = createAsyncThunk(
  "reportings/api_v1_reporting_retrieve",
  async payload => {
    const response = await apiService.api_v1_reporting_retrieve(payload)
    return response.data
  }
)
export const api_v1_reporting_update = createAsyncThunk(
  "reportings/api_v1_reporting_update",
  async payload => {
    const response = await apiService.api_v1_reporting_update(payload)
    return response.data
  }
)
export const api_v1_reporting_partial_update = createAsyncThunk(
  "reportings/api_v1_reporting_partial_update",
  async payload => {
    const response = await apiService.api_v1_reporting_partial_update(payload)
    return response.data
  }
)
export const api_v1_reporting_destroy = createAsyncThunk(
  "reportings/api_v1_reporting_destroy",
  async payload => {
    const response = await apiService.api_v1_reporting_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const reportingsSlice = createSlice({
  name: "reportings",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_reporting_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reporting_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reporting_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reporting_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reporting_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reporting_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reporting_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reporting_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_reporting_list,
  api_v1_reporting_create,
  api_v1_reporting_retrieve,
  api_v1_reporting_update,
  api_v1_reporting_partial_update,
  api_v1_reporting_destroy,
  slice: reportingsSlice
}
