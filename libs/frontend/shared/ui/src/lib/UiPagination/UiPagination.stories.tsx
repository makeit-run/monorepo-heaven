import { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"

import {
  UiPagination,
  UiPaginationContent,
  UiPaginationItem,
  UiPaginationLink,
  UiPaginationNext,
  UiPaginationPrevious
} from "./UiPagination"

const meta: Meta<typeof UiPagination> = {
  title: "Components/Pagination",
  component: UiPagination
} satisfies Meta<typeof UiPagination>

export default meta

type Story = StoryObj<typeof UiPagination>

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)

    const pages = [1, 2, 3, 4, 5]

    const onClickPrev = () => {
      if (page > 1) {
        setPage(page - 1)
      }
    }

    const onClickNext = () => {
      if (page < pages?.[pages?.length - 1]) {
        setPage(page + 1)
      }
    }

    return (
      <div className={"flex flex-col items-center"}>
        {Array.from(Array(page * 10).keys())
          .slice((page - 1) * 10)
          ?.map((_, i) => (
            <div
              className={"bg-primary/20 my-2 w-full rounded-md p-2 font-bold"}
            >
              {_ + 1}
            </div>
          ))}
        <UiPagination>
          <UiPaginationContent>
            <UiPaginationItem>
              <UiPaginationPrevious onClick={onClickPrev} />
            </UiPaginationItem>
            {pages?.map((p) => {
              return (
                <UiPaginationItem>
                  <UiPaginationLink
                    isActive={page === p}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </UiPaginationLink>
                </UiPaginationItem>
              )
            })}
            <UiPaginationItem>
              <UiPaginationNext onClick={onClickNext} />
            </UiPaginationItem>
          </UiPaginationContent>
        </UiPagination>
      </div>
    )
  }
}
