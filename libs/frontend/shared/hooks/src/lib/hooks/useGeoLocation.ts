"use client"

import { useState } from "react"

type useGeoLocationProps = Pick<
  GeolocationPosition["coords"],
  "latitude" | "longitude"
> | null

export function useGeoLocation() {
  const [coords, setCoords] = useState<useGeoLocationProps>(null)

  const fetchCoords = async () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => {
        console.error("Error getting coordinates:", error)
      }
    )
  }

  return { fetchCoords, coords }
}
