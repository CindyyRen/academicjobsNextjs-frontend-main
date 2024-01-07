
'use client'
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  employer: { employer_id: 0 },
  job: { description: '', employer_id: 0 },
  status: 'dangerTest',
  id: 13498,
  darkMode: 'light',
  searchText: '',
  searchJobCriteria: {},
  region: 'Global'
}
const postsSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setSearchJobCriteria(state, action) {
      state.searchJobCriteria = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload
    },
    setId(state, action) {
      state.id = action.payload
    },
    setRegion(state, action) {
      state.region = action.payload
    },
    setSearchText(state, action) {
      state.searchText = action.payload
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    setJob(state, action) {
      state.job = action.payload
    },
    setEmployer(state, action) {
      state.employer = action.payload
    },
    setTtsSpeed(state, action) {
      state.ttsSpeed = action.payload
    },
    setDarkMode(state) {
      state.darkMode = state.darkMode == 'light' ? 'dark' : 'light'
    },
    setStatusId(state, action) {
      console.log(action.payload)
      state.id = action.payload.id
      state.status = action.payload.status
    },
  },
})

export const {
  setRegion,
  setEmployer,
  setSearchJobCriteria,
  setJob,
  setStatus,
  setId,
  setStatusId,
  setDarkMode,
  setSearchText,
  setFilter,
} = postsSlice.actions

export default postsSlice.reducer
