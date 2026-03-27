import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pendingProfile: null,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openChatFromProfile(state, action) {
      state.pendingProfile = action.payload
    },
    clearPendingChat(state) {
      state.pendingProfile = null
    },
  },
})

export const { openChatFromProfile, clearPendingChat } = chatSlice.actions
export default chatSlice.reducer
