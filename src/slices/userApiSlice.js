import { apiSlice } from "./apiSlice";
const USER_URL = "/api";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query({
      query: (queryArg) => ({
        url: `${USER_URL}/users`,
        params: queryArg,
      }),
    }),
  }),
});

export const { useUsersQuery } = userApiSlice;
