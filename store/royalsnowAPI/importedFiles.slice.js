import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_importedfile_list = createAsyncThunk(
  "importedFiles/api_v1_importedfile_list",
  async payload => {
    const response = await apiService.api_v1_importedfile_list(payload)
    return response.data
  }
)
export const api_v1_importedfile_create = createAsyncThunk(
  "importedFiles/api_v1_importedfile_create",
  async payload => {
    const response = await apiService.api_v1_importedfile_create(payload)
    return response.data
  }
)
export const api_v1_importedfile_retrieve = createAsyncThunk(
  "importedFiles/api_v1_importedfile_retrieve",
  async payload => {
    const response = await apiService.api_v1_importedfile_retrieve(payload)
    return response.data
  }
)
export const api_v1_importedfile_update = createAsyncThunk(
  "importedFiles/api_v1_importedfile_update",
  async payload => {
    const response = await apiService.api_v1_importedfile_update(payload)
    return response.data
  }
)
export const api_v1_importedfile_partial_update = createAsyncThunk(
  "importedFiles/api_v1_importedfile_partial_update",
  async payload => {
    const response = await apiService.api_v1_importedfile_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_importedfile_destroy = createAsyncThunk(
  "importedFiles/api_v1_importedfile_destroy",
  async payload => {
    const response = await apiService.api_v1_importedfile_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const importedFilesSlice = createSlice({
  name: "importedFiles",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_importedfile_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_importedfile_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_importedfile_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_importedfile_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_importedfile_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_importedfile_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_importedfile_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_importedfile_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_importedfile_list,
  api_v1_importedfile_create,
  api_v1_importedfile_retrieve,
  api_v1_importedfile_update,
  api_v1_importedfile_partial_update,
  api_v1_importedfile_destroy,
  slice: importedFilesSlice
}
