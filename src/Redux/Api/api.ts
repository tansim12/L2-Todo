import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    // main end points methods
    getTodo: builder.query({
      query: () => ({
        url: "/task",
        method: "GET",
        // and other more
      }),
    }),
  }),
});

export const { useGetTodoQuery } = baseApi; //  useGetTodoQuery gets already hooks
