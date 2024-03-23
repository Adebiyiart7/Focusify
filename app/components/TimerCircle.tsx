import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import useTheme from "../hooks/useTheme";

const { width: screenWidth } = Dimensions.get("window");
const diameter = screenWidth - 50;

const TimerCircle = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.outer,
        {
          backgroundColor: colors.white,
        },
      ]}
    >
      <View
        style={[
          styles.inner,
          {
            borderColor: colors.primary,
          },
        ]}
      >
        <AppText style={{ fontWeight: "700", fontSize: 50 }}>25:00</AppText>
        <AppText color={colors.mediumText}>No sessions</AppText>
      </View>
    </View>
  );
};

export default TimerCircle;

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    margin: 18,
    borderWidth: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: diameter / 2,
  },
  outer: {
    alignSelf: "center",
    width: diameter,
    height: diameter,
    maxWidth: 280,
    maxHeight: 280,
    borderRadius: diameter / 2,
    elevation: 10,
  },
});
