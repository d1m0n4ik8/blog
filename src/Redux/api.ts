import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPostData } from '../Interfaces/IPost'
import { IUser } from '../Interfaces/IUser'
import { ICommentData } from '../Interfaces/IComment'

export const postsApi = createApi({
   reducerPath: 'postsReducer',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://dummyjson.com/',
   }),
   endpoints: (builder) => ({
      getAllPosts: builder.query<IPostData, { skip: number; limit: number }>({
         query: ({ skip, limit }) => `posts?limit=${limit}&skip=${skip}`,
      }),
      getUserById: builder.query<IUser, number>({
         query: (postId) => `users/${postId}`,
      }),
      getCommentsByPostId: builder.query<ICommentData, number>({
         query: (postId) => `comments/post/${postId}`,
      }),
   }),
})

export const { useGetAllPostsQuery, useGetUserByIdQuery, useGetCommentsByPostIdQuery } = postsApi
