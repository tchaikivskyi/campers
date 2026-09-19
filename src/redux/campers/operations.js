import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'

const LIMIT = 4

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (page, thunkAPI) => {
    const { equipment, ...filters } = thunkAPI.getState().filters
    const params = { page, limit: LIMIT }

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params[key] = filters[key]
      }
    })
    equipment.forEach((key) => {
      params[key] = true
    })

    try {
      const { data } = await axios.get('/campers', { params })
      return data
    } catch (error) {
      if (error.response?.status === 404) {
        return { items: [], total: 0 }
      }
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)
