
'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api1.sciencejobs.com.au/api',
    //'https://api1.sciencejobs.com.au/api',
    //'http://localhost:7997/api',
    //'https://api.sciencejobs.com.au/',
    //'https://api.sciencejobs.com.au/',
    //'http://localhost:3500/api',
    //'https://api.academicjobs.com/',
    // process.env.NODE_ENV === 'development'
    //   ? 'http://localhost:3500'
    //   : 'https://api.academicjobs.com/',
    credentials: 'same-origin',
    mode: "cors",
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['employers', 'employer', 'job', 'jobs'],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (data) => ({
        url: `/jobs`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),   
      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
        const { q,l } = queryArgs
        return { q, l }

      },
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },     
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        console.log(newItems)
        if (newItems) currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }, 
      providesTags: ['jobs'],
       invalidatesTags: ['jobs'],
    }),
    getEmployers: builder.query({
      query: () =>
        `employer`,
      mode: "cors",
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data.employers
      },
      providesTags: ['employers'],
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `job/${id}`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['job'],
    }),
    getEmployer: builder.query({
      query: (id) => ({
        url: `employer/${id}`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['employer'],
    }),
    getSingleQA: builder.query({
      query: () => ({
        url: `employer/3739`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['employer'],
    }),
    getJobsByEmployer: builder.query({
      query: (id) => ({
        url: `job/${id}`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data.jobs
      },
      providesTags: ['job'],
    }),
  }),
})
export const {
  useGetJobByIdQuery,
  useGetSingleQAQuery,
  useGetEmployersQuery,
  useGetJobsByEmployerQuery,
  useGetJobsQuery,
  useGetEmployerQuery,
} = apiSlice
