import React from "react"
import { toast } from "react-toastify"
import { fetchRunnerInfo, fetchRunnerJobs, startJob } from "../../api/gitlabAPI"

const useRunner = (id: string) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [tags, setTags] = React.useState<string[]>([])
  const [lastJob, setLastJob] = React.useState<{
    id: number
    projectId: number
    status: string
    step: string
    processed: boolean
  }>({ id: 0, projectId: 0, status: "", step: "", processed: false })

  React.useEffect(() => {
    fetchRunnerInfo(id).then(async ({ data }) => {
      setTags(data.tag_list)
      await fetchRunnerJobs(id).then(async (res) => {
        await fetchRunnerJobs(
          id,
          res.headers["x-total-pages"] as unknown as number
        ).then((res) => {
          setLastJob({
            id: res.data[0].id as unknown as number,
            projectId: res.data[0].project.id as unknown as number,
            status: res.data[0].status,
            step: res.data[0].stage,
            processed: true,
          })
          setIsLoading(false)
        })
      })
    })

    return () => {
      setTags([])
      setLastJob({
        id: 0,
        projectId: 0,
        status: "",
        step: "",
        processed: false,
      })
    }
  }, [])

  const restartJob = () => {
    startJob(lastJob.projectId, lastJob.id, () => setIsLoading(true))
      .then(() => toast.success("Job terminé."))
      .catch(() => toast.error("Unable to restart the job."))
      .finally(() => setIsLoading(false))
  }

  return {
    restartJob,
    isLoading,
    tags,
    lastJob,
  }
}

export default useRunner
