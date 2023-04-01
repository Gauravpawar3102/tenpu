import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const resumeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/optimizers',
  }),
  endpoints: (builder) => ({
    resumeDetails: builder.query({
      query: (id) => `/summary/${id}`,
    }),
  }),
});

export const { useResumeDetailsQuery } = resumeApi;
