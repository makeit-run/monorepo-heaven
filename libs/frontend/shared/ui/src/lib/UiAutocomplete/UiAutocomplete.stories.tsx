import { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"

import { UiAutocomplete } from "./UiAutocomplete"

const meta: Meta<typeof UiAutocomplete> = {
  title: "Components/Autocomplete",
  component: UiAutocomplete,
  parameters: {}
} satisfies Meta<typeof UiAutocomplete>

export default meta

type Story = StoryObj<typeof UiAutocomplete>

export const Default: Story = {
  args: {
    label: "Label",
    options: Array.from({ length: 10 }).map((_, i) => {
      const fake = (i + 1).toString()
      return { id: fake, value: fake }
    })
  },
  render: (args) => {
    const [data, setdata] = useState<any>(args?.options)
    const [search, setSearch] = useState<string>("")

    const onSelectHandler = (item: any) => {
      setSearch(item?.value)
    }

    return (
      <UiAutocomplete
        {...args}
        search={search}
        onChangeSearch={setSearch}
        options={data}
        onSelect={onSelectHandler}
        optionKey={"value"}
        shouldFilter
      />
    )
  }
}
