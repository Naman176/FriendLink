import { createSlice } from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        openAddPostModal: false,
        openEditProfileModal: false,
        openMainMenu: null,
        openPostMenu: null,
        darkMode: false,
        myInfo: null,
        user: {},
        allPosts: [],
        postId: null,
        searchedUsers: [],
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

        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        },

        addMyInfo: (state, action) => {
            if (action.payload !== null) {
                state.myInfo = action.payload.data
            }
            else {
                state.myInfo = action.payload
            }
        },

        addUser: (state, action) => {
            state.user = action.payload
        },

        addSinglePost: (state, action) => {
            let newPostArr = [...state.allPosts]
            let updatedPostArr = [action.payload.data, ...newPostArr]
            let uniquePostArr = new Set()
            let uniquePosts = updatedPostArr.filter((e) => {
                if (!uniquePostArr.has(e._id)) {
                    uniquePostArr.add(e)
                    return true
                }
                return false
            })
            state.allPosts = [...uniquePosts]
        },

        addToAllPost: (state, action) => {
            const newPostArr = [...action.payload.data]
            if (state.allPosts.length === 0) {
                state.allPosts = newPostArr
                return;
            }
            const existingPosts = [...state.allPosts]
            newPostArr.forEach((e) => {
                const existingPostIndex = existingPosts.findIndex((i) => {
                    return i._id === e._id
                })
                if (existingPostIndex !== -1) {
                    existingPosts[existingPostIndex] = e
                }
                else {
                    existingPosts.push(e)
                }
            })
            state.allPosts = existingPosts
        },

        addPostId: (state, action) => {
            state.postId = action.payload
        },

        deletePost: (state, action) => {
            let postArr = [...state.allPosts]
            let newPostArr = postArr.filter((e) => e._id !== state.postId)
            state.allPosts = newPostArr
        },

        addToSearchedUsers: (state, action) => {
            state.searchedUsers = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    addPostModal,
    editProfileModal,
    mainMenuBar, 
    postMenuBar, 
    toggleTheme, 
    addMyInfo, 
    addUser, 
    addToAllPost, 
    addSinglePost,
    addPostId,
    deletePost,
    addToSearchedUsers,
} = serviceSlice.actions

export default serviceSlice.reducer