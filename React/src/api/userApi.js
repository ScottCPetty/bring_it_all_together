import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bring-it-all-together-backend.onrender.com",
    prepareHeaders: (headers) => {
      const sessionToken = window.sessionStorage.getItem("Token");
      if (sessionToken) {
        headers.set("authorization", `Bearer ${sessionToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: () => ({}),
});
