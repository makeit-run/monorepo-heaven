import { Plus } from "lucide-react-native"
import React, { useState } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"

import { DaysSelector } from "@frontend/shared/mobile-ui/DaysSelector"
import { DayKeys, days } from "@frontend/shared/mobile-ui/DaysSelector/days"

import { Tag } from "../Tag"
import { Text } from "../Text"
import { TimePicker } from "../TimePicker"

interface DaySlot {
  days: string[]
  fromTime: string
  fromPeriod: string
  toTime: string
  toPeriod: string
}

export const WeeklyTimePicker = () => {
  const [selectedDays, setSelectedDays] = useState<DayKeys[]>([])
  const [savedSlots, setSavedSlots] = useState<DaySlot[]>([])

  const [timeFrom, setTimeFrom] = useState("03:30")
  const [timeTo, setTimeTo] = useState("06:30")

  const [fromPeriod, setFromPeriod] = useState("PM")
  const [toPeriod, setToPeriod] = useState("PM")

  const formatTime = (date: Date): { timeStr: string; period: string } => {
    const hours = date.getHours() % 12 || 12
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const period = date.getHours() >= 12 ? "PM" : "AM"
    return { timeStr: `${hours}:${minutes}`, period }
  }

  const handleConfirmFromTime = (date: Date) => {
    const { timeStr, period } = formatTime(date)
    setTimeFrom(timeStr)
    setFromPeriod(period)
  }

  const handleConfirmToTime = (date: Date) => {
    const { timeStr, period } = formatTime(date)
    setTimeTo(timeStr)
    setToPeriod(period)
  }

  const addTimeSlot = () => {
    if (selectedDays.length === 0) return

    const fullDays = selectedDays.map((day) => {
      const found = days.find((d) => d.key === day)
      return found ? found.display : day
    })

    const newSlots = fullDays.map((d) => ({
      days: [d],
      fromTime: timeFrom,
      fromPeriod,
      toTime: timeTo,
      toPeriod
    }))

    setSavedSlots([...savedSlots, ...newSlots])
    setSelectedDays([])
  }

  const removeSlot = (index: number) => {
    const updatedSlots = [...savedSlots]
    updatedSlots.splice(index, 1)
    setSavedSlots(updatedSlots)
  }

  return (
    <View className="w-full max-w-md rounded-md border border-dashed border-gray-200 bg-white p-4">
      <Text className="mb-3 text-base font-medium">Select Day(s)</Text>

      <DaysSelector
        selectedDays={selectedDays}
        onDaysSelected={setSelectedDays}
      />
      <View className={"flex-row gap-5"}>
        <TimePicker
          title={"Time from"}
          time={timeFrom}
          onTimeChange={handleConfirmFromTime}
          period={fromPeriod}
        />
        <TimePicker
          title={"Time to"}
          time={timeTo}
          onTimeChange={handleConfirmToTime}
          period={toPeriod}
        />
      </View>

      <TouchableOpacity
        className="text-primary-500 my-7 ml-1 flex-row items-center text-[18px]"
        onPress={addTimeSlot}
        activeOpacity={0.7}
      >
        <Plus size={16} className={"text-inherit"} />
        <Text className="text-primary-500 font-medium">ADD</Text>
      </TouchableOpacity>
      <ScrollView>
        <View className="flex flex-row flex-wrap gap-2">
          {savedSlots.map((slot, index) => (
            <Tag
              key={index}
              position={"start"}
              variant={"action"}
              onAction={() => removeSlot(index)}
            >
              <Text className={"w-20 truncate"}>
                {slot.days.join(", ")}: {slot.fromTime} {slot.fromPeriod} -{" "}
              </Text>
              {slot.toTime} {slot.toPeriod}
            </Tag>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
