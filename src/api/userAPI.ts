import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import store, { RootState } from "../store/store"
import { UserResponseType } from "../types/services-types/users/usersType"

const userId = 1

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["userInformations"],
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8091/api/v1/",
  }),
  endpoints: (builder) => ({
    getUserInformations: builder.query<UserResponseType, void>({
      providesTags: ["userInformations"],
      query: () => `users/user?id=${userId}`,
    }),
  }),
})

export function getGitlabCreds() {
  return userApi.endpoints.getUserInformations.select()(store as RootState).data
    ?.data.gitlab_access
}

export const { useGetUserInformationsQuery } = userApi
