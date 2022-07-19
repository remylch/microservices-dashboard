import React from "react"

type Props = {
  projects: any
  setIdProjectSelected: any
}

const TopBar: React.FC<Props> = ({ projects, setIdProjectSelected }) => {
  const [project, setProject] = React.useState<string>("")
  const [branche, setBranche] = React.useState<string>("")

  const changeProject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setIdProjectSelected(e.target.value)
    setProject(e.target.value)
  }

  const changeBranche = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setBranche(e.target.value as string)
  }

  return (
    <div className="h-24 flex items-center gap-5 px-10 border-b border-gray-100 w-full">
      <div>
        <label htmlFor="project" className="mr-5">
          Projet
        </label>
        <select
          data-testid="project-selector"
          onChange={changeProject}
          className="selector"
          id="project"
        >
          <option data-testid="project-option"></option>
          {projects.map((projetItem: { name: string; id: string }) => (
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
        {project !== "" && project !== undefined && (
          <>
            <label data-testid="label-branch" htmlFor="branch" className="mr-5">
              Branche
            </label>
            <select
              data-testid="branch-selector"
              onChange={changeBranche}
              id="branch"
              className="selector"
            >
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </>
        )}
      </div>
    </div>
  )
}

export default TopBar
