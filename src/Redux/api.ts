import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPostData } from '../Interfaces/IPost'
import { IUser } from '../Interfaces/IUser'
import { IComment, ICommentData } from '../Interfaces/IComment'

export const postsApi = createApi({
   reducerPath: 'postsReducer',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://dummyjson.com/',
   }),
   tagTypes: ['Comments'],
   endpoints: (builder) => ({
      getAllPosts: builder.query<IPostData, { skip: number; limit: number; searchString: string }>({
         query: ({ skip, limit, searchString }) =>
            searchString
               ? `posts/search?q=${searchString}&limit=${limit}&skip=${skip}`
               : `posts?limit=${limit}&skip=${skip}`,
      }),
      getUserById: builder.query<IUser, number>({
         query: (postId) => `users/${postId}`,
      }),
      getCommentsByPostId: builder.query<ICommentData, number>({
         query: (postId) => `comments/post/${postId}`,
         providesTags: ['Comments'],
      }),
      addNewComment: builder.mutation<
         IComment,
         {
            body: string
            postId: number
            userId: number
         }
      >({
         query: (body) => ({
            url: `comments/add`,
            method: 'POST',
            body,
         }),
         invalidatesTags: ['Comments'],
      }),
   }),
})

export const { useGetAllPostsQuery, useGetUserByIdQuery, useGetCommentsByPostIdQuery, useAddNewCommentMutation } =
   postsApi
