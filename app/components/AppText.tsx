import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import useTheme from "../hooks/useTheme";
import Sizes from "../config/Sizes";

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  fontWeight?: any;
  color?: string;
  numberOfLines?: number;
}

const AppText = React.memo(
  ({ children, style, fontSize, fontWeight, color, numberOfLines }: Props) => {
    const { colors } = useTheme();

    return (
      <Text
        style={[
          styles.text,
          {
            color: color || colors.text,
            fontSize: fontSize || Sizes.base,
            fontWeight: fontWeight || "400",
          },
          style,
        ]}
        numberOfLines={numberOfLines}
      >
        {children}
      </Text>
    );
  }
);

export default AppText;

const styles = StyleSheet.create({ text: {} });
