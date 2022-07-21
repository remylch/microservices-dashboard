import React from "react"
import { toast } from "react-toastify"
import { fetchRunners } from "../../api/gitlabAPI"
import { RunnerType } from "../../types/gitlab/runner-types"

const useRunners = () => {
  const [runningsRunners, setRunningsRunners] = React.useState<RunnerType[]>([])
  const [runners, setRunners] = React.useState<RunnerType[]>([])

  React.useEffect(() => {
    fetchRunners()
      .then(({ data }) => {
        data.forEach((runner: RunnerType) => {
          if (runner.status === "active") {
            setRunningsRunners([...runningsRunners, runner])
          } else {
            setRunners([...runners, runner])
          }
        })
      })
      //PATCH: test works fine when error appear but line not covered on test coverage
      .catch(() => toast.error("Unable to fetch runners."))

    return () => {
      setRunners([])
      setRunningsRunners([])
    }
  }, [])

  return {
    runners,
    runningsRunners,
  }
}

export default useRunners
