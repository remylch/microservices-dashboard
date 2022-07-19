import React from "react"
import { VscDebugStart, VscDebugStop, VscRefresh } from "react-icons/vsc"
import { BsCheck } from "react-icons/bs"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { IoGitBranch, IoCloseCircleOutline } from "react-icons/io5"
import { RunnerType } from "../../types/runner-types"
import useRunner from "../../hooks/runners-hooks/useRunner"

const Runner: React.FC<RunnerType> = ({
  name,
  description,
  id,
  ipAddress,
  online,
}) => {
  const { isLoading, lastJob, restartJob, tags } = useRunner(id)

  return (
    <div className="p-3 h-fit w-fit shadow-sm border rounded-md border-gray-200 bg-white">
      <div className=" border-b flex items-center gap-5 border-gray-200">
        <h3 className="py-2 text-xl font-semibold" data-testid="runner-name">
          {name}
        </h3>
        <span
          className="text-gray-400 text-xl font-semibold"
          data-testid="runner-id"
        >
          #{id}
        </span>
        {online ? (
          <BsCheck
            data-testid="check-icon"
            className="h-10 w-10 text-emerald-500"
          />
        ) : (
          <IoIosCloseCircleOutline
            data-testid="cross-icon"
            className="h-10 w-10 text-red-500"
          />
        )}
      </div>
      <div className="flex py-4 items-center gap-3 justify-between">
        <label data-testid="runner-ip">{ipAddress}</label>
        <p data-testid="runner-description">{description}</p>
      </div>
      <div className="flex items-center py-2  border-b border-gray-200">
        {!lastJob.step ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <label>last job running</label>{" "}
          </>
        ) : (
          <div className="flex items-center justify-center gap-5">
            {lastJob.status === "failed" ? (
              <>
                <IoCloseCircleOutline className="w-8 h-8 text-red-500" />
                <h3 className="bg-red-500 text-white px-3 py-1 font-semibold rounded-full">
                  Failed
                </h3>
              </>
            ) : (
              <>
                <h3 className="bg-emerald-500 text-white px-3 py-1 font-semibold rounded-full">
                  Success
                </h3>
                <BsCheck className="w-8 h-8 text-emerald-500" />
              </>
            )}

            <span
              className={
                lastJob.status === "failed"
                  ? "text-red-500"
                  : "text-emerald-500"
              }
            >
              {lastJob.step}
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center py-2 justify-around border-b border-gray-200">
        {lastJob.status === "failed" ? (
          online && !isLoading ? (
            <button className="runner-button" onClick={restartJob}>
              Restart <VscRefresh />
            </button>
          ) : (
            <button className="runner-button--disabled">
              Restart <VscRefresh />
            </button>
          )
        ) : (
          <>
            <button className="runner-button">
              Resume
              <VscDebugStart />
            </button>
            <button className="runner-button">
              Pause
              <VscDebugStop />
            </button>
          </>
        )}
      </div>

      <div className="flex pt-2 items-center gap-2">
        {tags.map((tag: string) => (
          <span
            className="rounded-full px-3 py-1 border border-gray-300"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Runner
