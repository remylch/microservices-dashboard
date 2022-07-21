import axios from "axios"
import { toast } from "react-toastify"
import { CommitType, ProjectType } from "../types/gitlab/project-types"
import {
  RunnerInfoType,
  RunnerJobsType,
  RunnerType,
} from "../types/gitlab/runner-types"

const baseUrl = "https://gitlab.com/"
const accessTokenn = process.env.REACT_APP_GITLAB_ACCESS_TOKEN

console.log(accessTokenn)

export const fetchGitlabProjects = async () =>
  axios.get<ProjectType[]>(
    `${baseUrl}api/v4/projects?owned=true&access_token=${accessTokenn}`
  )

export const fetchRunners = async () =>
  axios.get<RunnerType[]>(
    `${baseUrl}api/v4/runners?access_token=${accessTokenn}`
  )

export const fetchRunnerInfo = async (id: string) =>
  axios.get<RunnerInfoType>(
    `${baseUrl}api/v4/runners/${id}?access_token=${accessTokenn}`
  )

export const fetchRunnerJobs = async (id: string, page?: number) => {
  if (page) {
    return axios.get<RunnerJobsType[]>(
      `${baseUrl}api/v4/runners/${id}/jobs?page=${page}&access_token=${accessTokenn}`
    )
  }
  return axios.get<RunnerJobsType[]>(
    `${baseUrl}api/v4/runners/${id}/jobs?access_token=${accessTokenn}`
  )
}

// TODO: Patch request error 400
export const startJob = async (
  projectId: number,
  jobId: number,
  setIsLoading?: () => void
) => {
  toast.info("Job lancé.")
  setIsLoading && setIsLoading()
  return axios.post(
    `${baseUrl}api/v4/projects/${projectId}/jobs/${jobId}/play?access_token=${accessTokenn}`
  )
}

export const fetchProjectCommits = (projectId: number) =>
  axios.get<CommitType[]>(
    `${baseUrl}api/v4/projects/${projectId}/repository/commits?access_token=${accessTokenn}`
  )

export const fetchRepositoryBranches = async (id: number) =>
  axios.get<{ name: string }[]>(
    `${baseUrl}api/v4/projects/${id}/repository/branches?access_token=${accessTokenn}`
  )
