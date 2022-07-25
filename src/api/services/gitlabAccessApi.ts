import axios from "axios"
import { BaseApiResponseType } from "../../types/services-types/base"
import { UpdateUserGitlabAccessType } from "../../types/services-types/gitlabAccess/gitlabAccessTypes"

export const updateUserGitlabAccess = (
  updatedAccess: UpdateUserGitlabAccessType
) => {
  return axios.put<BaseApiResponseType<{ dns: string; accessToken: string }>>(
    "http://localhost:8091/api/v1/users/user?id=1",
    updateUserGitlabAccess
  )
}
