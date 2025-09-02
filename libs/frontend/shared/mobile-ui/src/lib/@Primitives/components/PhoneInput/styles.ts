import { Dimensions, StyleSheet } from "react-native"

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window")

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}

function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100
  return Math.round(value)
}

const styles = StyleSheet.create({
  container: {
    // width: wp(80),
    flexDirection: "row"
  },
  flagButtonView: {
    // width: wp(20),
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  flagButtonExtraWidth: {
    minWidth: wp(23)
  },
  dropDownImage: {
    height: 18,
    width: 18
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    textAlign: "left",
    flexDirection: "row",
    alignItems: "center"
  },
  numberText: {
    flex: 1
  }
})

export default styles
