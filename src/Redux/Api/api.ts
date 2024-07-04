import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    // main end points methods
    getTodo: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (params) {
          params.append("priority", priority);
        }

        return {
          // url: `/tasks?priority=${data}`,
          url: "tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (data) => {
        const { id } = data;
        return {
          url: `/task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
    toggleComplete: builder.mutation({
      query: (data) => {
        const { id } = data;
        return {
          url: `/task/${id}`,
          method: "PUT",
          body:{isCompleted:!data?.isCompleted}
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useToggleCompleteMutation } =
  baseApi; //  useGetTodoQuery gets already hooks
