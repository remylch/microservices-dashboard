/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react"
import TopBar from "../../../../components/Settings/TopBar"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/extend-expect"

function createTopBar() {
  const topBarProps = {
    projects: [
      { name: "p1", id: "1" },
      { name: "p2", id: "2" },
    ],
    branchs: [],
    setBranchSelected: jest.fn(),
    setIdProjectSelected: jest.fn(),
  }
  render(<TopBar {...topBarProps} />)
}

describe("test on TopBar component", () => {
  it("should render topBarCorrectly with props", () => {
    createTopBar()
    const projectSelector = screen.getByTestId("project-selector")
    expect(projectSelector).toBeVisible()
  })

  it("change project selected", () => {
    createTopBar()
    const projectSelector = screen.getByTestId("project-selector")
    const projectOptions = screen.getAllByTestId("project-option")
    expect(projectOptions.length).toBe(3)
    expect((projectOptions[0] as HTMLOptionElement).selected).toBeTruthy()
    expect((projectOptions[1] as HTMLOptionElement).selected).toBeFalsy()
    expect((projectOptions[2] as HTMLOptionElement).selected).toBeFalsy()
    userEvent.selectOptions(projectSelector, "p2")
    expect((projectOptions[2] as HTMLOptionElement).selected).toBeTruthy()
  })

  it("should render branch selector after picking project", () => {
    createTopBar()
    const projectSelector = screen.getByTestId("project-selector")
    const projectOptions = screen.getAllByTestId("project-option")
    expect(screen.queryByTestId("label-branche")).toBeFalsy()
    userEvent.selectOptions(projectSelector, "p1")
    expect((projectOptions[1] as HTMLOptionElement).selected).toBeTruthy()
    expect(screen.queryByTestId("label-branch")).toBeTruthy()
    expect(screen.queryByTestId("branch-selector")).toBeTruthy()
  })
})

export default {}
