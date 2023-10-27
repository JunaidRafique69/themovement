import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });
const USER_URL = "/api";
export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({
    users: builder.query({
      query: () => ({
        url: `${USER_URL}/users`,
      }),
    }),
  }),
});

export const { useUsersQuery } = apiSlice;
