import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_consumeroffer_list = createAsyncThunk(
  "consumerOffers/api_v1_consumeroffer_list",
  async payload => {
    const response = await apiService.api_v1_consumeroffer_list(payload)
    return response.data
  }
)
export const api_v1_consumeroffer_create = createAsyncThunk(
  "consumerOffers/api_v1_consumeroffer_create",
  async payload => {
    const response = await apiService.api_v1_consumeroffer_create(payload)
    return response.data
  }
)
export const api_v1_consumeroffer_retrieve = createAsyncThunk(
  "consumerOffers/api_v1_consumeroffer_retrieve",
  async payload => {
    const response = await apiService.api_v1_consumeroffer_retrieve(payload)
    return response.data
  }
)
export const api_v1_consumeroffer_update = createAsyncThunk(
  "consumerOffers/api_v1_consumeroffer_update",
  async payload => {
    const response = await apiService.api_v1_consumeroffer_update(payload)
    return response.data
  }
)
export const api_v1_consumeroffer_partial_update = createAsyncThunk(
  "consumerOffers/api_v1_consumeroffer_partial_update",
  async payload => {
    const response = await apiService.api_v1_consumeroffer_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_consumeroffer_destroy = createAsyncThunk(
  "consumerOffers/api_v1_consumeroffer_destroy",
  async payload => {
    const response = await apiService.api_v1_consumeroffer_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const consumerOffersSlice = createSlice({
  name: "consumerOffers",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_consumeroffer_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_consumeroffer_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_consumeroffer_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_consumeroffer_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_consumeroffer_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_consumeroffer_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_consumeroffer_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_consumeroffer_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_consumeroffer_list,
  api_v1_consumeroffer_create,
  api_v1_consumeroffer_retrieve,
  api_v1_consumeroffer_update,
  api_v1_consumeroffer_partial_update,
  api_v1_consumeroffer_destroy,
  slice: consumerOffersSlice
}
