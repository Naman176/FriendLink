import { createSlice } from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        openAddPostModal: false,
        openEditProfileModal: false,
        openMainMenu: null,
        openPostMenu: null,
        darkMode: false,
        openCommentMenu: null,
    },
    reducers: {
        addPostModal: (state, action) => {
            state.openAddPostModal = action.payload
        },

        editProfileModal: (state, action) => {
            state.openEditProfileModal = action.payload
        },

        mainMenuBar: (state, action) => {
            state.openMainMenu = action.payload
        },

        postMenuBar: (state, action) => {
            state.openPostMenu = action.payload
        },

        toggleTheme: (state, action) => {
            state.darkMode = !state.darkMode
        },

        commentMenuBar: (state, action) => {
            state.openCommentMenu = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { addPostModal, editProfileModal, mainMenuBar, postMenuBar, toggleTheme, commentMenuBar } = serviceSlice.actions

export default serviceSlice.reducer