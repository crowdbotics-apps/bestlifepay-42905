import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_loanaccount_list = createAsyncThunk(
  "loanAccounts/api_v1_loanaccount_list",
  async payload => {
    const response = await apiService.api_v1_loanaccount_list(payload)
    return response.data
  }
)
export const api_v1_loanaccount_create = createAsyncThunk(
  "loanAccounts/api_v1_loanaccount_create",
  async payload => {
    const response = await apiService.api_v1_loanaccount_create(payload)
    return response.data
  }
)
export const api_v1_loanaccount_retrieve = createAsyncThunk(
  "loanAccounts/api_v1_loanaccount_retrieve",
  async payload => {
    const response = await apiService.api_v1_loanaccount_retrieve(payload)
    return response.data
  }
)
export const api_v1_loanaccount_update = createAsyncThunk(
  "loanAccounts/api_v1_loanaccount_update",
  async payload => {
    const response = await apiService.api_v1_loanaccount_update(payload)
    return response.data
  }
)
export const api_v1_loanaccount_partial_update = createAsyncThunk(
  "loanAccounts/api_v1_loanaccount_partial_update",
  async payload => {
    const response = await apiService.api_v1_loanaccount_partial_update(payload)
    return response.data
  }
)
export const api_v1_loanaccount_destroy = createAsyncThunk(
  "loanAccounts/api_v1_loanaccount_destroy",
  async payload => {
    const response = await apiService.api_v1_loanaccount_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const loanAccountsSlice = createSlice({
  name: "loanAccounts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_loanaccount_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_loanaccount_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_loanaccount_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_loanaccount_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_loanaccount_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_loanaccount_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_loanaccount_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_loanaccount_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_loanaccount_list,
  api_v1_loanaccount_create,
  api_v1_loanaccount_retrieve,
  api_v1_loanaccount_update,
  api_v1_loanaccount_partial_update,
  api_v1_loanaccount_destroy,
  slice: loanAccountsSlice
}
