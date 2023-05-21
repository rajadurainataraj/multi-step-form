import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
  name: "form",
  initialState: {
    count: 0,
  },

  reducers: {
    increment: (state, action) => {
      state.count = action.payload
    },
  },
})
export const { increment } = formSlice.actions
export default formSlice.reducer
