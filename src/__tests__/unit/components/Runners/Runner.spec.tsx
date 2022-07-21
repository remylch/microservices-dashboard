/**
 * @jest-environment jsdom
 */

import Runner from "../../../../components/Runners/runner"
import { screen, render } from "@testing-library/react"
import { RunnerType } from "../../../../types/gitlab/runner-types"
import "@testing-library/jest-dom/extend-expect"

function createRunner(online: boolean) {
  let runner: RunnerType

  if (online) {
    runner = {
      active: true,
      description: "test",
      id: "runner id",
      ipAddress: "0.0.0.0",
      isShared: true,
      name: "test",
      online: true,
      paused: true,
      runnerType: "",
      status: "",
    }
  } else {
    runner = {
      active: false,
      description: "test",
      id: "runner id",
      ipAddress: "0.0.0.0",
      isShared: true,
      name: "test",
      online: false,
      paused: true,
      runnerType: "",
      status: "",
    }
  }

  render(<Runner {...runner} />)
  return runner
}

describe("test Runner component", () => {
  it("should render Runner with its props", () => {
    const { name, ipAddress, id, description } = createRunner(true)
    const rName = screen.getByTestId("runner-name")
    const rId = screen.getByTestId("runner-id")
    const rIp = screen.getByTestId("runner-ip")
    const rDesc = screen.getByTestId("runner-description")
    const checkIcon = screen.getByTestId("check-icon")
    expect(checkIcon).toBeVisible()
    expect(rName).toHaveTextContent(name)
    expect(rId).toHaveTextContent(id)
    expect(rIp).toHaveTextContent(ipAddress)
    expect(rDesc).toHaveTextContent(description)
  })

  it("should renderer cross-icon when runner not online", () => {
    createRunner(false)
    expect(screen.getByTestId("cross-icon")).toBeVisible()
  })
})

export default {}
