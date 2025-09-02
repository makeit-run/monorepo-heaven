import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import { Text, View } from "react-native"

import { MultiSelectDropdown } from "./MultiSelect"

export const BasicExample = () => {
  const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Grape", value: "grape" },
    { label: "Mango", value: "mango" }
  ]

  const [selectedFruits, setSelectedFruits] = useState<string[]>(["apple"])

  return (
    <View className="p-4">
      <Text className="mb-2 text-lg font-bold">Choose fruits:</Text>
      <MultiSelectDropdown
        options={options}
        value={selectedFruits}
        onChange={setSelectedFruits}
        label="Фрукты"
      />

      <Text className="mt-4">
        Selected:{" "}
        {selectedFruits.length > 0 ? selectedFruits.join(", ") : "ничего"}
      </Text>
    </View>
  )
}
interface Product {
  label: string
  value: number
  price: number
}

export const NumericValuesExample = () => {
  const products: Product[] = [
    { label: "computer", value: 1, price: 1200 },
    { label: "smartphone", value: 2, price: 800 },
    { label: "tablet", value: 3, price: 500 },
    { label: "monitor", value: 4, price: 300 },
    { label: "keyboard", value: 5, price: 100 }
  ]

  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([1, 3])

  const totalPrice = products
    .filter((product) => selectedProductIds.includes(product.value))
    .reduce((sum, product) => sum + product.price, 0)

  return (
    <View className="p-4">
      <Text className="mb-2 text-lg font-bold">Choose products:</Text>
      <MultiSelectDropdown<Product, number>
        options={products}
        value={selectedProductIds}
        onChange={setSelectedProductIds}
        label="Products"
        selectContainerClassName="border-blue-500"
      />

      <Text className="mt-4 font-bold">Total cost: ${totalPrice}</Text>
    </View>
  )
}

export const CustomExtractorsExample = () => {
  const users: any[] = [
    {
      id: "u1",
      firstName: "Xye",
      lastName: "Sidorov",
      email: "ivan@example.com",
      department: "IT"
    },
    {
      id: "u2",
      firstName: "Xenia",
      lastName: "Petrova",
      email: "maria@example.com",
      department: "HR"
    },
    {
      id: "u3",
      firstName: "Alex",
      lastName: "Ivanov",
      email: "alex@example.com",
      department: "IT"
    },
    {
      id: "u4",
      firstName: "Elena",
      lastName: "Kozlova",
      email: "elena@example.com",
      department: "Marketing"
    }
  ]

  const [selectedUserIds, setSelectedUserIds] = useState<string[]>(["u2", "u4"])

  return (
    <View className="p-4">
      <Text className="mb-2 text-lg font-bold">Choose users:</Text>
      <MultiSelectDropdown<any, string>
        options={users}
        value={selectedUserIds}
        onChange={setSelectedUserIds}
        label="Project participants"
        getOptionLabel={(user) =>
          `${user.firstName} ${user.lastName} (${user.department})`
        }
        getOptionValue={(user) => user.id}
        containerClassName="w-full"
      />

      <Text className="mt-4">Selected users: {selectedUserIds.length}</Text>

      {selectedUserIds.length > 0 && (
        <View className="mt-2 rounded bg-gray-100 p-2">
          {users
            .filter((user) => selectedUserIds.includes(user.id))
            .map((user) => (
              <Text key={user.id} className="mb-1">
                {user.firstName} {user.lastName} - {user.email}
              </Text>
            ))}
        </View>
      )}
    </View>
  )
}

const meta: Meta = {
  component: MultiSelectDropdown,
  title: "Components/MultiSelect"
}
export default meta

type Story = StoryObj
