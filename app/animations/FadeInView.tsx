import React, { ReactNode } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import useZoomIn from "../hooks/useZoomIn";
import useFadeIn from "../hooks/useFadeIn";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const FadeInView = ({ style, children }: Props) => {
  const opacity = useFadeIn();

  return <Animated.View style={[{ opacity }, style]}>{children}</Animated.View>;
};

export default FadeInView;
