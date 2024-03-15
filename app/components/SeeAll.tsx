import React from "react";
import { Pressable, StyleSheet } from "react-native";

import AppText from "./AppText";
import useTheme from "../hooks/useTheme";

const ViewAll = React.memo(() => {
  const { colors } = useTheme();

  return (
    <Pressable>
      <AppText style={[styles.text, { color: colors.primary }]}>
        See all
      </AppText>
    </Pressable>
  );
});

export default ViewAll;

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
  },
});
