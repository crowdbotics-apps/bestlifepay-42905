import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_membershipplan_list = createAsyncThunk(
  "membershipPlans/api_v1_membershipplan_list",
  async payload => {
    const response = await apiService.api_v1_membershipplan_list(payload)
    return response.data
  }
)
export const api_v1_membershipplan_create = createAsyncThunk(
  "membershipPlans/api_v1_membershipplan_create",
  async payload => {
    const response = await apiService.api_v1_membershipplan_create(payload)
    return response.data
  }
)
export const api_v1_membershipplan_retrieve = createAsyncThunk(
  "membershipPlans/api_v1_membershipplan_retrieve",
  async payload => {
    const response = await apiService.api_v1_membershipplan_retrieve(payload)
    return response.data
  }
)
export const api_v1_membershipplan_update = createAsyncThunk(
  "membershipPlans/api_v1_membershipplan_update",
  async payload => {
    const response = await apiService.api_v1_membershipplan_update(payload)
    return response.data
  }
)
export const api_v1_membershipplan_partial_update = createAsyncThunk(
  "membershipPlans/api_v1_membershipplan_partial_update",
  async payload => {
    const response = await apiService.api_v1_membershipplan_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_membershipplan_destroy = createAsyncThunk(
  "membershipPlans/api_v1_membershipplan_destroy",
  async payload => {
    const response = await apiService.api_v1_membershipplan_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const membershipPlansSlice = createSlice({
  name: "membershipPlans",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_membershipplan_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_membershipplan_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_membershipplan_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_membershipplan_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_membershipplan_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_membershipplan_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_membershipplan_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_membershipplan_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_membershipplan_list,
  api_v1_membershipplan_create,
  api_v1_membershipplan_retrieve,
  api_v1_membershipplan_update,
  api_v1_membershipplan_partial_update,
  api_v1_membershipplan_destroy,
  slice: membershipPlansSlice
}
