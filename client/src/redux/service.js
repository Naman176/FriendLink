import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addMyInfo, addSinglePost, addToAllPost, addUser, deletePost } from "./slice";

export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
        credentials: 'include',
    }),
    keepUnusedDataFor: 60 * 60 * 24 * 7,
    tagTypes: ["Post", "User", "Me"],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: 'user/register',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Me"],
        }),

        login: builder.mutation({
            query: (data) => ({
                url: 'user/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Me"]
        }),

        myInfo: builder.query({
            query: () => ({
                url: 'user/me',
                method: 'GET',
            }),
            providesTags: ["Me"],
            async onQueryStarted(params, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(addMyInfo(data))
                } catch (error) {
                    console.log(error);
                }
            }
        }),

        logoutMe: builder.mutation({
            query: () => ({
                url: '/user/logout',
                method: 'POST',
            }),
            invalidatesTags: ["Me"],
        }),

        userDetails: builder.query({
            query: (id) => ({
                url: `user/${id}`,
                method: 'GET'
            }),
            providesTags: ['User'],
            async onQueryStarted(params, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(addUser(data))
                } catch (error) {
                    console.log(error);
                }
            }
        }),

        searchUsers: builder.query({
            query: (query) => ({
                url: `user/search/${query}`,
                method: 'GET',
            })
        }),

        followUser: builder.mutation({
            query: (id) => ({
                url: `user/follow/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'User', id }]
        }),

        updateProfile: builder.mutation({
            query: (data) => ({
                url: `user/update`,
                method: 'PUT',
            }),
            invalidatesTags: ['Me'],
        }),

        addPost: builder.mutation({
            query: (data) => ({
                url: `post`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Post'],
            async onQueryStarted(params, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(addSinglePost(data))
                } catch (error) {
                    console.log(error)
                }
            }
        }),

        allPost: builder.query({
            query: (page) => ({
                url: `post?page=${page}`,
                method: 'GET'
            }),
            providesTags: (result, error, args) => {
                return result ? [...result.data.map(({ _id }) => ({ type: 'Post', id: _id })), { type: 'Post', id: 'LIST' }]
                    : [{ type: 'Post', id: 'LIST' }]
            },
            async onQueryStarted(params, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(addToAllPost(data))
                } catch (error) {
                    console.log(error);
                }
            }
        }),

        deletePost: builder.mutation({
            query: (id) => ({
                url: `post/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(params, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(deletePost(data))
                } catch (error) {
                    console.log(error)
                }
            }
        }),

        likePost: builder.mutation({
            query: (id) => ({
                url: `post/like/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }]
        }),

        singlePost: builder.query({
            query: (id) => ({
                url: `post/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, { id }) => [{ type: 'Post', id }]
        }),

        repost: builder.mutation({
            query: (id) => ({
                url: `post/repost/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['User']
        }),

        addComment: builder.mutation({
            query: (id, ...data) => ({
                url: `comment/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['User']
        }),

        deleteComment: builder.mutation({
            query: (postId, id) => ({
                url: `comment/${postId}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, {postId}) => [{type: 'Post', id: postId}],
        })

    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useMyInfoQuery,
    useLogoutMeMutation,
    useUserDetailsQuery,
    useLazySearchUsersQuery,
    useFollowUserMutation,
    useUpdateProfileMutation,
    useAddPostMutation,
    useAllPostQuery,
    useDeletePostMutation,
    useLikePostMutation,
    useSinglePostQuery,
    useRepostMutation,
    useAddCommentMutation,
    useDeleteCommentMutation
} = serviceApi