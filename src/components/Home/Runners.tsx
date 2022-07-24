import React from "react"
import Runner from "../Runners/runner"
import { RunnerType } from "../../types/gitlab/runner-types"
import useRunners from "../../hooks/runners-hooks/useRunners"

const Runners = () => {
  const { runners, runningsRunners } = useRunners()

  return (
    <div className="flex flex-col p-5 w-full">
      <div className="relative border border-gray-300 mb-10">
        <h3 className="absolute -top-3 left-8 bg-white dark:bg-fade-blue px-3">
          Running
        </h3>
      </div>
      <div className="flex gap-5 items-start content-start flex-wrap ">
        {runningsRunners.length > 0 ? (
          runningsRunners.map((runner: RunnerType) => (
            <Runner
              name={runner.name}
              id={runner.id}
              active={runner.active}
              description={runner.description}
              ipAddress={runner.ipAddress}
              isShared={runner.isShared}
              online={runner.online}
              paused={runner.paused}
              runnerType={runner.runnerType}
              status={runner.status}
              key={runner.id}
            />
          ))
        ) : (
          <span data-testid="message-no-runner-running">
            No runner is currently running.
          </span>
        )}
      </div>
      <div className="relative border border-gray-300 my-10">
        <h3 className="absolute -top-3 left-8 bg-white dark:bg-fade-blue px-3">
          Terminated
        </h3>
      </div>
      {runners.length > 0 ? (
        runners.map((runner: RunnerType) => (
          <Runner
            name={runner.name}
            id={runner.id}
            active={runner.active}
            description={runner.description}
            ipAddress={runner.ipAddress}
            isShared={runner.isShared}
            online={runner.online}
            paused={runner.paused}
            runnerType={runner.runnerType}
            status={runner.status}
            key={runner.id}
          />
        ))
      ) : (
        <span data-testid="message-no-runner-available">
          No runner currently available.
        </span>
      )}
    </div>
  )
}

export default Runners
