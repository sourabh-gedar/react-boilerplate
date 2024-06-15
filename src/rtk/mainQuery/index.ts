import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL
});

export const blogApiSlice = createApi({
  reducerPath: 'mainQuery',
  baseQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true,
});
