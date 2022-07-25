import axios from "axios"
import { toast } from "react-toastify"
import { CommitType, ProjectType } from "../types/gitlab/project-types"
import {
  RunnerInfoType,
  RunnerJobsType,
  RunnerType,
} from "../types/gitlab/runner-types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = "https://gitlab.com/api/v4/"
const accessTokenn = process.env.REACT_APP_GITLAB_ACCESS_TOKEN

export const fetchGitlabProjects = async () =>
  axios.get<ProjectType[]>(
    `${baseUrl}projects?owned=true&access_token=${accessTokenn}`
  )

export const fetchRunners = async () =>
  axios.get<RunnerType[]>(`${baseUrl}runners?access_token=${accessTokenn}`)

export const fetchRunnerInfo = async (id: string) =>
  axios.get<RunnerInfoType>(
    `${baseUrl}runners/${id}?access_token=${accessTokenn}`
  )

export const fetchRunnerJobs = async (id: string, page?: number) => {
  if (page) {
    return axios.get<RunnerJobsType[]>(
      `${baseUrl}runners/${id}/jobs?page=${page}&access_token=${accessTokenn}`
    )
  }
  return axios.get<RunnerJobsType[]>(
    `${baseUrl}runners/${id}/jobs?access_token=${accessTokenn}`
  )
}

export const fetchProjectCommits = (projectId: number) =>
  axios.get<CommitType[]>(
    `${baseUrl}projects/${projectId}/repository/commits?access_token=${accessTokenn}`
  )

export const fetchRepositoryBranches = async (id: number) =>
  axios.get<{ name: string }[]>(
    `${baseUrl}projects/${id}/repository/branches?access_token=${accessTokenn}`
  )

// TODO: Patch request error 400
export const startJob = async (
  projectId: number,
  jobId: number,
  setIsLoading?: () => void
) => {
  toast.info("Job lancé.")
  setIsLoading && setIsLoading()
  return axios.post(
    `${baseUrl}projects/${projectId}/jobs/${jobId}/play?access_token=${accessTokenn}`
  )
}

export const gitlabApi = createApi({
  reducerPath: "gitlabApi",
  tagTypes: [
    "runners",
    "projects",
    "runnerJobs",
    "runnerInfo",
    "projectCommits",
  ],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllGitlabProjects: builder.query<ProjectType[], void>({
      providesTags: ["projects"],
      query: () => `/projects?owned=true&access_token=${accessTokenn}`,
    }),

    getAllRunners: builder.query<RunnerType[], string>({
      providesTags: ["runners"],
      query: () => `runners?access_token=${accessTokenn}`,
    }),

    getRunnerInfo: builder.query<RunnerInfoType, string>({
      providesTags: ["runnerInfo"],
      query: (id: string) => `runners/${id}?access_token=${accessTokenn}`,
    }),

    getRunnerJobs: builder.query<RunnerJobsType[], string>({
      providesTags: ["runnerJobs"],
      query: (id: string, page?: number) =>
        `runners/${id}/jobs?page=${page}&access_token=${accessTokenn}`,
    }),

    getProjectCommits: builder.query<CommitType[], string>({
      providesTags: ["projectCommits"],
      query: (projectId: string) =>
        `projects/${projectId}/repository/commits?access_token=${accessTokenn}`,
    }),

    getRepositoryBranches: builder.query<{ name: string }[], string>({
      query: (id: string) =>
        `projects/${id}/repository/branches?access_token=${accessTokenn}`,
    }),
  }),
})

export const {
  useGetAllGitlabProjectsQuery,
  useGetAllRunnersQuery,
  useGetRunnerInfoQuery,
  useGetProjectCommitsQuery,
  useGetRepositoryBranchesQuery,
  useGetRunnerJobsQuery,
} = gitlabApi
