import { LogBox, StyleSheet } from "react-native"

import "./global.css"

LogBox.ignoreAllLogs()

const AppEntryPoint = require("./.storybook").default

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default AppEntryPoint
