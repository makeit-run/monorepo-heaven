const dayEnum = {
  MONDAY: "M",
  TUESDAY: "T",
  WEDNESDAY: "W",
  THURSDAY: "Th",
  FRIDAY: "F",
  SATURDAY: "S",
  SUNDAY: "Su"
} as const

type DayKeys = (typeof dayEnum)[keyof typeof dayEnum]

interface DayEntity {
  key: DayKeys
  display: string
  full: string
}

const days: DayEntity[] = [
  { key: dayEnum.MONDAY, display: "Mon", full: "Monday" },
  { key: dayEnum.TUESDAY, display: "Tue", full: "Tuesday" },
  { key: dayEnum.WEDNESDAY, display: "Wed", full: "Wednesday" },
  { key: dayEnum.THURSDAY, display: "Thu", full: "Thursday" },
  { key: dayEnum.FRIDAY, display: "Fri", full: "Friday" },
  { key: dayEnum.SATURDAY, display: "Sat", full: "Saturday" },
  { key: dayEnum.SUNDAY, display: "Sun", full: "Sunday" }
]

export { days, type DayEntity, type DayKeys, dayEnum }