import React, { ReactNode } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import useZoomIn from "../hooks/useZoomIn";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const ZoomInView = ({ style, children }: Props) => {
  const scale = useZoomIn();

  return (
    <Animated.View style={[{ transform: [{ scale }] }, style]}>
      {children}
    </Animated.View>
  );
};

export default ZoomInView;
