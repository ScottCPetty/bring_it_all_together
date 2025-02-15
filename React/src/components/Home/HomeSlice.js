// HomeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";

const homeApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/api/user/users",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
        responseHandler: (response) => response.text(),
      }),
      providesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/api/user/${userId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

const homeSlice = createSlice({
  name: "home",
  initialState: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getAllUsers.matchFulfilled,
      (state, { payload }) => {
        return JSON.parse(payload);
      }
    );
  },
});

export default homeSlice.reducer;
// export const { useGetAllUsersQuery } = homeApi;

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  // useUpdateUserMutation,
} = homeApi;
