import React from "react"

type Props = {
  projects: { name: string; id: string }[]
  branchs: { name: string }[] | undefined
  setIdProjectSelected: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setBranchSelected: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const TopBar: React.FC<Props> = ({
  branchs,
  projects,
  setIdProjectSelected,
  setBranchSelected,
}) => {
  return (
    <div className="h-24 flex items-center gap-5 px-10 border-b border-gray-100 w-full">
      <div>
        <label
          htmlFor="project"
          className="mr-5 font-semibold text-lg text-primary dark:text-secondary"
        >
          Projet
        </label>
        <select
          data-testid="project-selector"
          onChange={setIdProjectSelected}
          className="selector"
          id="project"
        >
          <option data-testid="project-option"></option>
          {projects.map((projetItem) => (
            <option
              key={projetItem.name}
              value={projetItem.id}
              data-testid={`project-option`}
            >
              {projetItem.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {branchs && (
          <>
            <label
              data-testid="label-branch"
              htmlFor="branch"
              className="mr-5 font-semibold text-lg text-primary dark:text-secondary"
            >
              Branche
            </label>
            <select
              data-testid="branch-selector"
              onChange={setBranchSelected}
              id="branch"
              className="selector"
            >
              <option></option>
              {branchs.map((branche) => (
                <option key={branche.name} value={branche.name}>
                  {branche.name}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    </div>
  )
}

export default TopBar

export const MemoizedTopBar = React.memo(TopBar)
