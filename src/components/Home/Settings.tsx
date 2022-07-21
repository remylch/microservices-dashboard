const Settings = () => (
  <div className="h-full  flex flex-1 flex-col min-h-screen">
    <section className="flex flex-1 my-10 mx-8 ">
      <div className="flex flex-col mt-5 w-full">
        {/* gitlab informations */}
        <div className="shadow-md border border-gray-200 w-full p-5 pt-7 rounded-lg mb-10 relative">
          <span className="absolute left-5 -top-4 bg-white px-3 text-gray-500">
            Gitlab Informations
          </span>
          <h2 className="mb-5 font-semibold">Gitlab DNS</h2>
          <div className="flex mb-5">
            <input
              placeholder="domain.gitlab.com"
              type="text"
              className="w-full px-3 py-2 border-l-2 border-t-2 border-b-2 rounded-l-md border-gray-300"
            />
            <button className=" bg-blue-500 text-white px-5 rounded-r-md hover:bg-blue-700 focus:outline-none focus:border-blue-500">
              Save
            </button>
          </div>
          <h2 className="mb-3 font-semibold">Gitlab Token</h2>
          <span className="pb-2 text-gray-500">Provide OAuth2 token</span>
          <div className="flex">
            <input
              type="text"
              className="w-full px-3 py-2 border-l-2 border-t-2 border-b-2 rounded-l-md border-gray-300"
            />
            <button className="bg-blue-500 text-white px-5 rounded-r-md hover:bg-blue-700 focus:outline-none focus:border-blue-500">
              Save
            </button>
          </div>
        </div>
        {/* services informations */}
        <div className="shadow-md border border-gray-200 w-full p-5 pt-7 rounded-lg mb-10 relative">
          <span className="absolute left-5 -top-4 bg-white px-3 text-gray-500">
            Services Informations
          </span>
          <h2 className="mb-5 font-semibold">Services up : </h2>
          <h2 className="mb-5 font-semibold">Services Down : </h2>
          <h2 className="mb-5 font-semibold">Services Error : </h2>
          <h2 className="mb-5 font-semibold">Services URL</h2>
          <div className="flex mb-5">
            <input
              placeholder="domain.gitlab.com"
              type="text"
              className="w-full px-3 py-2 border-l-2 border-t-2 border-b-2 rounded-l-md border-gray-300"
            />
            <button className=" bg-blue-500 text-white px-5 rounded-r-md hover:bg-blue-700 focus:outline-none focus:border-blue-500">
              Save
            </button>
          </div>
          <h2 className="mb-3 font-semibold">Access token</h2>
          <div className="flex">
            <input
              type="text"
              className="w-full px-3 py-2 border-l-2 border-t-2 border-b-2 rounded-l-md border-gray-300"
            />
            <button className="bg-blue-500 text-white px-5 rounded-r-md hover:bg-blue-700 focus:outline-none focus:border-blue-500">
              Save
            </button>
          </div>
        </div>
        {/* bottom buttons */}
        <div className="shadow-md flex flex-col border border-gray-200 w-full p-5 pt-7 rounded-lg mb-5 relative">
          <span className="absolute left-5 -top-4 bg-white px-3 text-gray-500">
            Account
          </span>
          <div className="w-full flex flex-col">
            <div className="flex items-center gap-5 py-5">
              <span className="text-semibold">Email</span>
              <span className="text-gray-500">test@mail.com</span>
              <button className="text-sm font-light text-blue-500 hover:underline cursor-pointer hover:underline-offset-2">
                modify
              </button>
            </div>

            <div className="border-b border-gray-300" />
            <div className="flex items-center gap-5 py-5">
              <span className="text-semibold">Password</span>
              <span className="text-gray-500">************</span>
              <button className="text-sm font-light text-blue-500 hover:underline cursor-pointer hover:underline-offset-2">
                modify
              </button>
            </div>
          </div>

          <div className="border-b border-gray-300 mb-5" />
          <button className=" bg-red-600 text-white font-bold py-2 px-5 self-center justify-center hover:bg-red-800 rounded-md">
            Delete account
          </button>
        </div>
      </div>
    </section>
  </div>
)

export default Settings
