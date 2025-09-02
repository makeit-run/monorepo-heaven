import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import {
  UiTable,
  UiTableBody,
  UiTableCaption,
  UiTableCell,
  UiTableFooter,
  UiTableHead,
  UiTableHeader,
  UiTableRow
} from "./UiTable"

const meta: Meta<typeof UiTable> = {
  title: "Components/Table",
  component: UiTable
} satisfies Meta<typeof UiTable>

export default meta

type Story = StoryObj<typeof UiTable>

export const Default: Story = {
  render: () => {
    const invoices = [
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal"
      },
      {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer"
      },
      {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal"
      },
      {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer"
      },
      {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card"
      }
    ]

    return (
      <UiTable className={""}>
        <UiTableCaption>A list of your recent invoices.</UiTableCaption>
        <UiTableHeader>
          <UiTableRow>
            <UiTableHead className="w-[100px]">Invoice</UiTableHead>
            <UiTableHead>Status</UiTableHead>
            <UiTableHead>Method</UiTableHead>
            <UiTableHead className="text-right">Amount</UiTableHead>
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          {invoices.map((invoice) => (
            <UiTableRow key={invoice.invoice}>
              <UiTableCell className="font-medium">
                {invoice.invoice}
              </UiTableCell>
              <UiTableCell>{invoice.paymentStatus}</UiTableCell>
              <UiTableCell>{invoice.paymentMethod}</UiTableCell>
              <UiTableCell className="text-right">
                {invoice.totalAmount}
              </UiTableCell>
            </UiTableRow>
          ))}
        </UiTableBody>
        <UiTableFooter>
          <UiTableRow>
            {/*AN EXAMPLE OF HOW TO SPECIFY THE WIDTH OF A COLUMN*/}
            <UiTableCell colSpan={3}>Total</UiTableCell>
            <UiTableCell className="text-right">$2,500.00</UiTableCell>
          </UiTableRow>
        </UiTableFooter>
      </UiTable>
    )
  }
}
