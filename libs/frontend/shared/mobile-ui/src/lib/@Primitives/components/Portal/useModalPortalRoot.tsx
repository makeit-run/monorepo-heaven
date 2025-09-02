import * as React from "react"
import { Platform, View, ViewStyle } from "react-native"

const ROOT: ViewStyle = {
  flex: 1
}

/**
 * @deprecated use `FullWindowOverlay` from `react-native-screens` instead
 * @example
 import { FullWindowOverlay } from "react-native-screens"
 const WindowOverlay = Platform.OS === "ios" ? FullWindowOverlay : Fragment
 // Wrap the `<PortalHost/>` with `<WindowOverlay/>`
 <WindowOverlay><PortalHost/></WindowOverlay>
 */
export function useModalPortalRoot() {
  const ref = React.useRef<View>(null)
  const [sideOffset, setSideOffSet] = React.useState(0)

  const onLayout = React.useCallback(() => {
    if (Platform.OS === "web") return
    ref.current?.measure((_x, _y, _width, _height, _pageX, pageY) => {
      setSideOffSet(-pageY)
    })
  }, [])

  return {
    ref,
    sideOffset,
    onLayout,
    style: ROOT
  }
}
