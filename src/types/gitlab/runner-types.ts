export type RunnerType = {
  active: boolean
  description: string
  id: string
  ipAddress: string
  isShared: boolean
  name: string
  online: boolean
  paused: boolean
  runnerType: string
  status: string
}

export type RunnerInfoType = {
  access_level: string
  active: boolean
  architecture: string
  contacted_at: string
  description: string
  groups: string[]
  id: number
  ip_address: string
  is_shared: boolean
  locked: boolean
  maximum_timeout: string | null
  name: string
  online: boolean
  paused: boolean
  platform: string
  projects: {
    avatar_url: string | null
    created_at: string
    default_branch: string
    description: string | null
    forks_count: number
    http_url_to_repo: string
    id: number
    last_activity_at: string
    name: string
    name_with_namespace: string
    namespace: {
      avatar_url: string | null
      full_path: string
      id: number
      kind: string
      name: string
      parent_id: number | null
      path: string
      web_url: string
    }
    path: string
    path_with_namespace: string
    readme_url: string | null
    ssh_url_to_repo: string
    star_count: number
    tag_list: string[]
    topics: string[]
    web_url: string
  }[]
  revision: string
  run_untagged: boolean
  runner_type: string
  status: string
  tag_list: string[]
  version: string
}

export type RunnerJobsType = {
  id: string
  project: { id: string }
  status: string
  stage: string
  processed: boolean
}

export type RunnerTagsType = string[]
