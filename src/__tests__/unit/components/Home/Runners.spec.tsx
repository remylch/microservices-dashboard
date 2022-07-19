/**
 * @jest-environment jsdom
 */

import Runners from "../../../../components/Home/Runners"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe("test runner component", () => {
  it("should render runner correctly and print message for no runner available", () => {
    render(<Runners />)
    const messageEmptyRunnersRunning = screen.getByTestId(
      "message-no-runner-running"
    )
    const messageEmptyRunnersAvailable = screen.getByTestId(
      "message-no-runner-available"
    )

    expect(messageEmptyRunnersAvailable).toHaveTextContent(
      "No runner currently available."
    )
    expect(messageEmptyRunnersRunning).toHaveTextContent(
      "No runner is currently running."
    )
  })
})

export default {}
