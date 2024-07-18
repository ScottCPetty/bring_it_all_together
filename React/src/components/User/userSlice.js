import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";

const userUpdateApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ userId, ...form }) => ({
        url: `/api/user/${userId}`,
        method: "PUT",
        body: form.form,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

const updateSlice = createSlice({
  name: "update",
  initialState: {
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.updateUser.matchFulfilled,
      (state, { payload }) => {
        return JSON.parse(payload);
      }
    );
  },
});

export default updateSlice.reducer;
export const { useUpdateUserMutation } = userUpdateApi;
