import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_creditorbusinessdata_list = createAsyncThunk(
  "creditorBusinessData/api_v1_creditorbusinessdata_list",
  async payload => {
    const response = await apiService.api_v1_creditorbusinessdata_list(payload)
    return response.data
  }
)
export const api_v1_creditorbusinessdata_create = createAsyncThunk(
  "creditorBusinessData/api_v1_creditorbusinessdata_create",
  async payload => {
    const response = await apiService.api_v1_creditorbusinessdata_create(
      payload
    )
    return response.data
  }
)
export const api_v1_creditorbusinessdata_retrieve = createAsyncThunk(
  "creditorBusinessData/api_v1_creditorbusinessdata_retrieve",
  async payload => {
    const response = await apiService.api_v1_creditorbusinessdata_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_creditorbusinessdata_update = createAsyncThunk(
  "creditorBusinessData/api_v1_creditorbusinessdata_update",
  async payload => {
    const response = await apiService.api_v1_creditorbusinessdata_update(
      payload
    )
    return response.data
  }
)
export const api_v1_creditorbusinessdata_partial_update = createAsyncThunk(
  "creditorBusinessData/api_v1_creditorbusinessdata_partial_update",
  async payload => {
    const response = await apiService.api_v1_creditorbusinessdata_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_creditorbusinessdata_destroy = createAsyncThunk(
  "creditorBusinessData/api_v1_creditorbusinessdata_destroy",
  async payload => {
    const response = await apiService.api_v1_creditorbusinessdata_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const creditorBusinessDataSlice = createSlice({
  name: "creditorBusinessData",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_creditorbusinessdata_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditorbusinessdata_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditorbusinessdata_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditorbusinessdata_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditorbusinessdata_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditorbusinessdata_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditorbusinessdata_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creditorbusinessdata_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_creditorbusinessdata_list,
  api_v1_creditorbusinessdata_create,
  api_v1_creditorbusinessdata_retrieve,
  api_v1_creditorbusinessdata_update,
  api_v1_creditorbusinessdata_partial_update,
  api_v1_creditorbusinessdata_destroy,
  slice: creditorBusinessDataSlice
}
