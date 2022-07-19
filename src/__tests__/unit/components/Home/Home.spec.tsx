/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer"
import Home from "../../../../components/Home/Home"

describe("Home component tests", () => {
  it("should render the component correctly", () => {
    const home = renderer.create(<Home />)
    expect(home.toJSON()).toMatchSnapshot()
  })
})

export default {}
