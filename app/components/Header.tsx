import React, { ReactNode } from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import Sizes from "../config/Sizes";
import AppText from "./AppText";

const { width } = Dimensions.get("window");

interface Props {
  Left?: ReactNode;
  title?: string;
  Right?: ReactNode;
  style?: StyleProp<ViewStyle>;
  titleWidth?: number;
  textStyle?: StyleProp<TextStyle>;
}

const Header = React.memo(
  ({ Left, title, Right, style, titleWidth, textStyle }: Props) => {
    return (
      <View style={[styles.header, style]}>
        <View style={styles.left}>{Left}</View>
        <AppText
          fontSize={18}
          fontWeight="500"
          numberOfLines={1}
          style={[
            {
              width: titleWidth || width - 120,
              textAlign: "center",
            },
            textStyle,
          ]}
        >
          {title}
        </AppText>
        <View style={styles.right}>{Right}</View>
      </View>
    );
  }
);

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: Sizes.wall,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {},
  right: {},
});
