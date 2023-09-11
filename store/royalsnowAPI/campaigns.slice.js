import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_campaign_list = createAsyncThunk(
  "campaigns/api_v1_campaign_list",
  async payload => {
    const response = await apiService.api_v1_campaign_list(payload)
    return response.data
  }
)
export const api_v1_campaign_create = createAsyncThunk(
  "campaigns/api_v1_campaign_create",
  async payload => {
    const response = await apiService.api_v1_campaign_create(payload)
    return response.data
  }
)
export const api_v1_campaign_retrieve = createAsyncThunk(
  "campaigns/api_v1_campaign_retrieve",
  async payload => {
    const response = await apiService.api_v1_campaign_retrieve(payload)
    return response.data
  }
)
export const api_v1_campaign_update = createAsyncThunk(
  "campaigns/api_v1_campaign_update",
  async payload => {
    const response = await apiService.api_v1_campaign_update(payload)
    return response.data
  }
)
export const api_v1_campaign_partial_update = createAsyncThunk(
  "campaigns/api_v1_campaign_partial_update",
  async payload => {
    const response = await apiService.api_v1_campaign_partial_update(payload)
    return response.data
  }
)
export const api_v1_campaign_destroy = createAsyncThunk(
  "campaigns/api_v1_campaign_destroy",
  async payload => {
    const response = await apiService.api_v1_campaign_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_campaign_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_campaign_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_campaign_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_campaign_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_campaign_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_campaign_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_campaign_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_campaign_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_campaign_list,
  api_v1_campaign_create,
  api_v1_campaign_retrieve,
  api_v1_campaign_update,
  api_v1_campaign_partial_update,
  api_v1_campaign_destroy,
  slice: campaignsSlice
}
