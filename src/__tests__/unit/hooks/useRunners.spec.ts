/**
 * @jest-environment jsdom
 */

import useRunners from "../../../hooks/runners-hooks/useRunners"
import { renderHook } from "@testing-library/react-hooks"
import { screen } from "@testing-library/react"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { RunnerType } from "../../../types/gitlab/runner-types"

const server = setupServer(
  rest.get("https://gitlab.com/api/v4/runners", (req, res, ctx) => {
    const runners: RunnerType[] = [
      {
        active: false,
        description: "test",
        id: "1",
        ipAddress: "0.0.0.1",
        isShared: false,
        name: "test-runner-1",
        online: false,
        paused: false,
        runnerType: "",
        status: "stopped",
      },
      {
        active: true,
        description: "test2",
        id: "2",
        ipAddress: "0.0.0.2",
        isShared: true,
        name: "test-runner-2",
        online: true,
        paused: false,
        runnerType: "",
        status: "active",
      },
    ]

    return res(ctx.json(runners))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("tests on useRunners hook", () => {
  it("should render hook and lists must be empty ", () => {
    const { result } = renderHook(() => useRunners())
    expect(result.current.runners).toHaveLength(0)
    expect(result.current.runningsRunners).toHaveLength(0)
  })

  it("should fetch data", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRunners())
    expect(result.current.runningsRunners).toHaveLength(0)
    expect(result.current.runners).toHaveLength(0)

    await waitForNextUpdate()

    expect(result.current.runners[0]).toEqual({
      active: false,
      description: "test",
      id: "1",
      ipAddress: "0.0.0.1",
      isShared: false,
      name: "test-runner-1",
      online: false,
      paused: false,
      runnerType: "",
      status: "stopped",
    })
    expect(result.current.runningsRunners).toHaveLength(1)
  })

  it("should render toast when fetch failed", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRunners())
    await waitForNextUpdate().catch(async (e) => {
      expect(
        await screen.findByText("Unable to fetch runners.")
      ).toBeInTheDocument()
    })
  })
})

export default {}
