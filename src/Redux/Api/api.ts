import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    // main end points methods
    getTodo: builder.query({
      query: () => {
        return {
          url: "/tasks",
          method: "GET",
          // and other more
        };
      },
    }),
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body:data
        };
      },
    }),
  }),
});

export const { useGetTodoQuery, useAddTodoMutation } = baseApi; //  useGetTodoQuery gets already hooks
