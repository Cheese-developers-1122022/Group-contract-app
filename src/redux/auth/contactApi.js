import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({
    baseUrl: "  https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContactUser: builder.query({
      query: ({ token, count }) => ({
        url: `/contact?page=${count}`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    getContactUserPage2: builder.query({
      query: (token) => ({
        url: "/contact?page=8",
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { useGetContactUserQuery, useGetContactUserPage2Query } =
  contactApi;
