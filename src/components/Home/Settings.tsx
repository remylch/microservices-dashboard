import InputText from "../utils-components/Inputs"
import React, { useCallback, useEffect, useState } from "react"
import { clickOnButtonFieldDisabled } from "../../utils/toastUtils"

type SettingsFields = {
  gitlabDomain: string
  gitlabToken: string
  servicesDomain: string
  servicesToken: string
}

const Settings = () => {
  const [fields, setFields] = useState<SettingsFields>({
    gitlabDomain: "",
    gitlabToken: "",
    servicesDomain: "",
    servicesToken: "",
  })
  const [originalFields, setOriginalFields] = useState<SettingsFields>({
    gitlabDomain: "",
    gitlabToken: "",
    servicesDomain: "",
    servicesToken: "",
  })

  useEffect(() => {
    //PATCH: setup originals fields by getting api call
    return () => {
      setOriginalFields({
        gitlabDomain: "",
        gitlabToken: "",
        servicesDomain: "",
        servicesToken: "",
      })
    }
  }, [])

  const updateValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }, [])

  function checkFieldUpdate(field: string): boolean {
    const myfield = field as keyof typeof fields
    return fields[myfield] !== originalFields[myfield] ? true : false
  }

  return (
    <div className="h-full  flex flex-1 flex-col min-h-screen relative z-10">
      <section className="flex flex-1 my-10 mx-8 ">
        <div className="flex flex-col mt-5 w-full">
          {/* gitlab informations */}
          <div className="shadow-md border border-gray-200 w-full p-5 pt-7 rounded-lg mb-10 relative">
            <span className="absolute z-10 left-5 -top-4 bg-white dark:bg-fade-blue px-3 text-gray-500 dark:text-secondary">
              Gitlab Informations
            </span>
            <h2 className="mb-5 font-semibold text-primary dark:text-secondary">
              Gitlab DNS
            </h2>
            <div className="flex mb-5 gap-5">
              <InputText
                name="gitlabDomain"
                value={fields.gitlabDomain}
                setValue={updateValue}
              />
              {checkFieldUpdate("gitlabDomain") ? (
                <button className="btn-primary">Save</button>
              ) : (
                <button
                  className="btn-disabled"
                  onClick={() => clickOnButtonFieldDisabled()}
                >
                  Save
                </button>
              )}
            </div>
            <h2 className="mb-3 font-semibold text-primary dark:text-secondary">
              Gitlab Token
            </h2>
            <div className="flex gap-5">
              <InputText
                name="gitlabToken"
                value={fields.gitlabToken}
                setValue={updateValue}
              />
              {checkFieldUpdate("gitlabToken") ? (
                <button className="btn-primary">Save</button>
              ) : (
                <button
                  className="btn-disabled"
                  onClick={() => clickOnButtonFieldDisabled()}
                >
                  Save
                </button>
              )}
            </div>
          </div>
          {/* services informations */}
          <div className="shadow-md border border-gray-200 w-full p-5 pt-7 rounded-lg mb-10 relative">
            <span className="absolute z-10 left-5 -top-4 bg-white px-3 dark:bg-fade-blue text-gray-500 dark:text-secondary">
              Services Informations
            </span>
            <h2 className="mb-5 font-semibold text-primary dark:text-secondary">
              Services up :
            </h2>
            <h2 className="mb-5 font-semibold text-primary dark:text-secondary">
              Services Down :
            </h2>
            <h2 className="mb-5 font-semibold text-primary dark:text-secondary">
              Services Error :
            </h2>
            <h2 className="mb-5 font-semibold text-primary dark:text-secondary">
              Services URL
            </h2>
            <div className="flex mb-5 gap-5">
              <InputText
                name="servicesDomain"
                setValue={updateValue}
                value={fields.servicesDomain}
              />
              {checkFieldUpdate("servicesDomain") ? (
                <button className="btn-primary">Save</button>
              ) : (
                <button
                  className="btn-disabled"
                  onClick={() => clickOnButtonFieldDisabled()}
                >
                  Save
                </button>
              )}
            </div>
            <h2 className="mb-3 font-semibold text-primary dark:text-secondary">
              Access token
            </h2>
            <div className="flex gap-5">
              <InputText
                name="servicesToken"
                setValue={updateValue}
                value={fields.servicesToken}
              />
              {checkFieldUpdate("servicesToken") ? (
                <button className="btn-primary">Save</button>
              ) : (
                <button
                  className="btn-disabled"
                  onClick={() => clickOnButtonFieldDisabled()}
                >
                  Save
                </button>
              )}
            </div>
          </div>
          {/* bottom buttons */}
          <div className="shadow-md flex flex-col border border-gray-200 w-full p-5 pt-7 rounded-lg mb-5 relative">
            <span className="absolute z-10 left-5 -top-4 bg-white px-3 dark:bg-fade-blue  text-gray-500 dark:text-secondary">
              Account
            </span>
            <div className="w-full flex flex-col">
              <div className="flex items-center gap-5 py-5">
                <span className="font-semibold   text-primary dark:text-secondary">
                  Email
                </span>
                <span className="text-primary dark:text-secondary">
                  test@mail.com
                </span>
                <button className="text-sm font-light text-helio-gray hover:underline cursor-pointer hover:underline-offset-2">
                  modify
                </button>
              </div>

              <div className="border-b border-gray-300" />
              <div className="flex items-center gap-5 py-5">
                <span className="font-semibold text-primary dark:text-secondary">
                  Password
                </span>
                <span className="text-primary dark:text-secondary">
                  ************
                </span>
                <button className="text-sm font-light  text-helio-gray hover:underline cursor-pointer hover:underline-offset-2">
                  modify
                </button>
              </div>
            </div>

            <div className="border-b border-gray-300 mb-5" />
            <button className="btn-danger self-center">Delete account</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Settings
