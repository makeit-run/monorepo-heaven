import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  hiddenInput: {
    ...StyleSheet.absoluteFillObject,
    ...Platform.select({
      ios: {
        opacity: 0.02,
        color: "transparent"
      },
      default: {
        opacity: 0
      }
    })
  }
})
