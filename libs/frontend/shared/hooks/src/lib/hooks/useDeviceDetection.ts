import { useEffect, useState } from "react"

export type Device = "Mobile" | "Tablet" | "Desktop"
const useDeviceDetection = (): Device => {
  const [device, setDevice] = useState<Device>("Desktop")

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent)
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent)

      if (isMobile) {
        setDevice("Mobile")
      } else if (isTablet) {
        setDevice("Tablet")
      } else {
        setDevice("Desktop")
      }
    }

    handleDeviceDetection()
    window.addEventListener("resize", handleDeviceDetection)

    return () => {
      window.removeEventListener("resize", handleDeviceDetection)
    }
  }, [])

  return device
}

export { useDeviceDetection }
