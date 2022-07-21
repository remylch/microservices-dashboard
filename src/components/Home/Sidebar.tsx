import React from "react"
import { AiFillCode, AiFillSetting } from "react-icons/ai"
import {
  FaRunning,
  FaChevronRight,
  FaChevronLeft,
  FaDocker,
} from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { IoMdExit } from "react-icons/io"
import { SizeContext } from "../../hooks/size-observer"
import gitlabLogo from "../../statics/images/gitlab-logo-500.svg"
import { MdOutlineApps } from "react-icons/md"

const links = [
  {
    name: "code",
    Icon: AiFillCode,
  },
  {
    name: "services",
    Icon: MdOutlineApps,
  },
  {
    name: "containers",
    Icon: FaDocker,
  },
  {
    name: "runners",
    Icon: FaRunning,
  },
  {
    name: "settings",
    Icon: AiFillSetting,
  },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)

  const location = useLocation()

  const { innerWidth } = React.useContext(SizeContext)

  React.useEffect(() => {
    if (innerWidth <= 800) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [innerWidth])

  const toggleSidebar = () => {
    setIsOpen((open) => !open)
  }

  return (
    <div
      className={`max-h-screen transition sticky left-0 top-0 transform-cpu duration-300 ease-in items-stretch justify-between bg-blue-500 min-h-full ${
        isOpen ? "w-1/4 min-w-min max-w-min" : "w-fit"
      } py-10`}
    >
      <div>
        <div
          role="button"
          tabIndex={0}
          onClick={toggleSidebar}
          onKeyDown={toggleSidebar}
          className={`text-gray-200 flex self-end cursor-pointer ${
            isOpen ? "justify-end" : "justify-center"
          } px-5 w-full mb-10`}
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </div>
        <div
          className={`font-semibold text-xl flex items-center  justify-center pb-10 text-white ${
            isOpen && "pr-10"
          }`}
        >
          <img alt="logo gitlab" className="h-16" src={gitlabLogo} />
          {isOpen && <h2>Gitlab Dashboard</h2>}
        </div>

        {links.map((link) => (
          <Link
            to={link.name}
            key={link.name}
            className={`group ${
              link.name === links[links.length - 1].name && "mb-5"
            } ${
              location.pathname === `/${link.name}` && "bg-blue-700"
            } cursor-pointer w-full h-14 capitalize flex items-center py-2 relative ${
              isOpen ? "px-10" : "px-2 justify-center"
            } text-white hover:bg-blue-600`}
          >
            <link.Icon className={`h-10 ${isOpen && "mr-5"}`} />

            {isOpen ? (
              link.name
            ) : (
              <label
                id="labelLinkName"
                className="absolute z-[9999] bg-white hidden group-hover:block px-3 py-1 rounded-full border border-gray-300 shadow-sm top-1/2 translate-y-[-50%] left-[110%] duration-300 ease-in-out transform text-blue-500"
              >
                {link.name}
              </label>
            )}
            {isOpen && location.pathname === `/${link.name}` && (
              <FaChevronRight className="mt-1 absolute right-5" />
            )}
          </Link>
        ))}
      </div>

      <button
        className={`bg-blue-700 mx-5 ${
          isOpen ? "px-10 py-3" : " w-fit p-3"
        }   rounded-md text-white hover:bg-blue-800 cursor-pointer`}
      >
        {isOpen ? <span>Disconnect</span> : <IoMdExit />}
      </button>
    </div>
  )
}

export default Sidebar
