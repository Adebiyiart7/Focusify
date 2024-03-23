import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

import AppText from "./AppText";
import useTheme from "../hooks/useTheme";
import AppPressable from "./AppPressable";
import Sizes from "../config/Sizes";

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  startIcon?: ReactNode;
}

const AppButton = React.memo(({ title, onPress, style, startIcon }: Props) => {
  const { colors } = useTheme();

  return (
    <AppPressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors.primary }, style]}
    >
      {startIcon}
      <AppText color={colors.white} style={styles.text}>
        {title}
      </AppText>
    </AppPressable>
  );
});

export default AppButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: Sizes.sm,
    width: "100%",
    borderRadius: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
  },
});
