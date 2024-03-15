import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useTheme from "../hooks/useTheme";
import Sizes from "../config/Sizes";
import AppPressable from "./AppPressable";

interface Props {
  onPress: () => void;
}

const SelectTaskButton = React.memo(({ onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <AppPressable
      style={[styles.container, { backgroundColor: colors.white }]}
      onPress={onPress}
    >
      <AppText color={colors.mediumText}>Select Task</AppText>
      <MaterialCommunityIcons name="chevron-down" size={Sizes.xl} />
    </AppPressable>
  );
});

export default SelectTaskButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: Sizes.wall,
    elevation: 5,
    marginTop: 10,
  },
});
