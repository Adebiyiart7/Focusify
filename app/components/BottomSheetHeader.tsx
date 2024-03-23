import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import AppText from "./AppText";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";

interface Props {
  LeftIcon?: ReactNode;
  IconRight?: ReactNode;
  title: string;
}

const BottomSheetHeader = ({ LeftIcon, IconRight, title }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { borderBottomColor: colors.border }]}>
      <View>{LeftIcon}</View>
      <AppText fontWeight="700" fontSize={18}>
        {title}
      </AppText>
      <View>{IconRight}</View>
    </View>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Sizes.md,
    paddingTop: 0,
    borderBottomWidth: 1,
  },
});
