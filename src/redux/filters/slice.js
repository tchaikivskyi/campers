import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  equipment: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => action.payload,
    resetFilters: () => initialState,
  },
})

export const { setFilters, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer
