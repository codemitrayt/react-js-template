import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
      state.isAuth = true
    },

    logout: (state) => {
      state.isAuth = false
      state.user = null
      state.token = null
    },

    setUser: (state, action) => {
      const { user } = action.payload
      state.user = user
    },
  },
})

export const { setAuth, logout, setUser } = authSlice.actions
export default authSlice.reducer
