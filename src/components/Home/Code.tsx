import React, { useCallback, useMemo } from "react"
import { IoGitCommit, IoGitMerge } from "react-icons/io5"
import {
  fetchGitlabProjects,
  fetchProjectCommits,
  fetchRepositoryBranches,
} from "../../api/gitlabAPI"
import { CommitType, ProjectType } from "../../types/gitlab/project-types"
import { MemoizedTopBar } from "../Settings/TopBar"

const Code = () => {
  const [idProjectSelected, setIdProjectSelected] = React.useState<
    string | undefined
  >(undefined)

  const [commits, setCommits] = React.useState<CommitType[]>([])
  const [projects, setProjects] = React.useState<ProjectType[]>([])
  const [branchs, setBranchs] = React.useState<{ name: string }[] | undefined>(
    undefined
  )
  const [branchSelected, setBranchSelected] = React.useState<string>("")

  const handleChangeBranchSelected = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setBranchSelected(e.target.value)
    },
    []
  )

  const handleChangeProjectIdSelected = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setIdProjectSelected(e.target.value)
    },
    []
  )

  React.useEffect(() => {
    fetchGitlabProjects().then(({ data }) => {
      setProjects(data)
    })
    return () => setProjects([])
  }, [])

  useMemo(() => {
    typeof idProjectSelected === "string" &&
      fetchRepositoryBranches(parseInt(idProjectSelected)).then(({ data }) =>
        setBranchs(data)
      )
  }, [idProjectSelected])

  React.useEffect(() => {
    if (idProjectSelected) {
      if (branchSelected !== "") {
        // TODO: Fetch commit for the branch selected only then return
      }
      fetchProjectCommits(parseInt(idProjectSelected)).then(({ data }) => {
        console.log(data)
        setCommits(data)
      })
    }
    return () => setCommits([])
  }, [idProjectSelected, branchSelected])

  return (
    <div className="h-full w-full flex flex-1 flex-col min-h-screen">
      <MemoizedTopBar
        branchs={branchs}
        projects={projects}
        setBranchSelected={handleChangeBranchSelected}
        setIdProjectSelected={handleChangeProjectIdSelected}
      />
      <Commits commits={commits} idProjectSelected={idProjectSelected} />
    </div>
  )
}

interface ICommits {
  commits: CommitType[]
  idProjectSelected: string | undefined
}

const Commits: React.FC<ICommits> = ({ commits, idProjectSelected }) => {
  return (
    <div className="p-10">
      <div className="p-10 flex h-full w-full flex-col gap-5 border-dashed border-2 border-gray-200 rounded-md">
        {idProjectSelected ? (
          <>
            <h3 className="text-primary dark:text-secondary font-bold text-xl">
              Latests commits
            </h3>
            {commits ? (
              commits.map((commit) => <Commit key={commit.id} {...commit} />)
            ) : (
              <span className="text-lg text-gray-400 dark:text-fade-blue font-semibold text-center">
                Awaiting for new commits...
              </span>
            )}
          </>
        ) : (
          <div className="flex font-semibold flex-1 justify-center items-center text-gray-500 dark:text-secondary">
            <h1>No project selected.</h1>
          </div>
        )}
      </div>
    </div>
  )
}

const Commit: React.FC<CommitType> = ({ author_name, created_at, message }) => {
  const date = created_at.split("T")[0]
  const hour = created_at.split("T")[1].split("+")[0].split(".")[0]
  const isMerge = message.toLowerCase().trim().includes("merge")
  return (
    <div className="flex flex-col px-5 py-2 border rounded-md shadow-sm">
      <div className="font-ligh text-sm text-gray-500 dark:text-secondary flex gap-3">
        <span>{date}</span>
        <span>{hour}</span>
      </div>
      <div className={`flex items-center gap-2 rounded-md py-1 px-2 `}>
        <span className="text-primary dark:text-secondary">{author_name}</span>
        {isMerge ? (
          <div className="bg-emerald-500 flex w-[100px] items-center justify-center py-1 px-2 rounded-full text-white">
            <IoGitMerge className="w-5 h-5 pt-1" />
            <span>merge</span>
          </div>
        ) : (
          <div className="bg-blue-500  flex w-[100px] items-center justify-center py-1 px-2 rounded-full text-white">
            <IoGitCommit className="w-5 h-5 pt-1" />
            <span>commit</span>
          </div>
        )}
        <q className="text-gray-600 dark:text-secondary text-sm font-semibold">
          {message}
        </q>
      </div>
    </div>
  )
}

export default Code
