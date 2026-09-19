import { createSlice } from '@reduxjs/toolkit'
import { fetchCamperById, fetchCampers } from './operations'

const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    total: 0,
    page: 1,
    current: null,
    isLoading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state, action) => {
        state.isLoading = true
        state.error = null
        if (action.meta.arg === 1) {
          state.items = []
          state.total = 0
        }
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const page = action.meta.arg
        state.isLoading = false
        state.page = page
        state.total = action.payload.total
        state.items =
          page === 1
            ? action.payload.items
            : [...state.items, ...action.payload.items]
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.current = null
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false
        state.current = action.payload
      })
      .addCase(fetchCamperById.rejected, handleRejected)
  },
})

export default campersSlice.reducer
