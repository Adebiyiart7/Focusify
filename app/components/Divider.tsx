import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import useTheme from "../hooks/useTheme";

const Divider = React.memo(({ style }: { style?: StyleProp<ViewStyle> }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        { borderBottomWidth: 1, borderBottomColor: colors.border },
        style,
      ]}
    />
  );
});

export default Divider;

const styles = StyleSheet.create({});
