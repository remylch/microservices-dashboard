import React from "react"

interface Props {
  name: string
  value: string
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText: React.FC<Props> = ({ setValue, value, name }) => (
  <input
    type="text"
    value={value}
    onChange={setValue}
    name={name}
    className="border-b-2 bg-transparent border-primary dark:text-secondary dark:border-secondary dark:focus:border-silver-pink w-full focus:outline-none"
  />
)

export default React.memo(InputText)
