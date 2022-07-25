import { BaseApiResponseType } from "../base"

export type ProfileType = {
  gitlab_access: {
    id: number
    dns: string
    accessToken: string
  }
  id: number
  email: string
}

export type UserResponseType = BaseApiResponseType<ProfileType>
