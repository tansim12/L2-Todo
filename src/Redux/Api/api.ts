import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes:["todo"],
  endpoints: (builder) => ({
    // main end points methods
    getTodo: builder.query({
      query: (data) => {
        return {
          url: `/tasks?priority=${data}`,
          method: "GET",
          // and other more
        };
      },
      providesTags:["todo"]
    }),
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags:["todo"]
    }),
    deleteTodo: builder.mutation({
      query: (data) => {
        const {id} = data
        return {
          url: `/task/${id}`,
          method: "DELETE",
          
        };
      },
      invalidatesTags:["todo"]
    }),
  }),
});

export const { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation } = baseApi; //  useGetTodoQuery gets already hooks
