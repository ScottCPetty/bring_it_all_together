import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";

const homeApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/api/user/users",
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("Token")}`,
        // },
        responseHandler: (response) => response.text(),
      }),
      providesTags: ["Users"],
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
export const { useGetAllUsersQuery } = homeApi;
