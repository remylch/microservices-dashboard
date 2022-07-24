import React from "react"
import { toggleSidebarWithValue } from "../../store/appStore"
import gitlabLogo from "../../statics/images/gitlab-logo-500.svg"
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
import { MdOutlineApps } from "react-icons/md"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"
import useColorTheme from "../../hooks/useColorTheme"

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
  const { toggle: toggleColorTheme } = useColorTheme()
  const { sidebarOpen, colorMode } = useAppSelector((state) => state.global)
  const dispatch = useAppDispatch()

  const location = useLocation()

  const { innerWidth } = React.useContext(SizeContext)

  React.useEffect(() => {
    if (innerWidth <= 800) {
      dispatch(toggleSidebarWithValue(false))
    } else {
      dispatch(toggleSidebarWithValue(true))
    }
  }, [innerWidth])

  const openCloseSidebar = () => {
    dispatch(
      sidebarOpen ? toggleSidebarWithValue(false) : toggleSidebarWithValue(true)
    )
  }

  return (
    <div
      className={`max-h-screen transition sticky left-0 top-0 transform-cpu duration-300 ease-in items-stretch justify-between bg-secondary dark:bg-primary min-h-full ${
        sidebarOpen ? "w-1/4 min-w-min max-w-min" : "w-fit"
      } py-10`}
    >
      <div>
        <div
          role="button"
          tabIndex={0}
          onClick={openCloseSidebar}
          onKeyDown={openCloseSidebar}
          className={`text-primary dark:text-gray-200 flex self-end cursor-pointer ${
            sidebarOpen ? "justify-end" : "justify-center"
          } px-5 w-full mb-10`}
        >
          {sidebarOpen ? (
            <div className="p-2 rounded-md hover:bg-fade-blue ">
              <FaChevronLeft />
            </div>
          ) : (
            <div className="p-2 rounded-md hover:bg-fade-blue">
              <FaChevronRight />
            </div>
          )}
        </div>
        <div
          className={`font-semibold text-xl flex items-center  justify-center pb-10 text-primary dark:text-secondary`}
        >
          {/*<img alt="logo gitlab" className="h-16" src={gitlabLogo} />*/}
          {sidebarOpen && (
            <h2 className="text-center">Microservices Dashboard</h2>
          )}
        </div>

        {links.map((link) => (
          <Link
            to={link.name}
            key={link.name}
            className={`group ${
              link.name === links[links.length - 1].name && "mb-5"
            } ${
              location.pathname === `/${link.name}` &&
              "bg-fade-blue text-secondary"
            } cursor-pointer w-full h-14 capitalize flex items-center py-2 relative ${
              sidebarOpen ? "px-10" : "px-2 justify-center"
            } text-primary dark:text-white hover:bg-helio-gray`}
          >
            <link.Icon className={`h-10 ${sidebarOpen && "mr-5"}`} />

            {sidebarOpen ? (
              link.name
            ) : (
              <label
                id="labelLinkName"
                className="absolute z-50 bg-white dark:bg-primary hidden group-hover:block px-3 py-1 rounded-full border border-gray-300 dark:border-transparent shadow-sm top-1/2 translate-y-[-50%] left-[110%] duration-300 ease-in-out transform text-primary dark:text-secondary"
              >
                {link.name}
              </label>
            )}
            {sidebarOpen && location.pathname === `/${link.name}` && (
              <FaChevronRight className="mt-1 absolute right-5" />
            )}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button
          className={`btn-outline ${
            sidebarOpen ? "px-10 py-3" : " w-fit p-3"
          }   `}
        >
          {sidebarOpen ? <span>Disconnect</span> : <IoMdExit />}
        </button>
      </div>

      <div className="py-5 w-full flex items-center justify-center">
        <button
          onClick={toggleColorTheme}
          className="border-2 hover:bg-fade-blue dark:hover:bg-helio-gray border-white text-primary hover:text-secondary dark:text-white rounded-md  p-2"
        >
          {colorMode === "light" ? (
            <HiOutlineSun className="w-7 h-7" />
          ) : (
            <HiOutlineMoon className="w-7 h-7" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Sidebar
