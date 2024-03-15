import React, { ReactNode } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import useSlide, { UseSlideProps } from "../hooks/useSlide";

interface Props extends UseSlideProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  direction: "horizontal" | "vertical";
}

const SlideView = ({ style, children, direction, negative, value }: Props) => {
  const { translate } = useSlide({ negative, value });

  return (
    <Animated.View
      style={[
        {
          transform: [
            { translateX: direction === "horizontal" ? translate : 0 },
            { translateY: direction === "vertical" ? translate : 0 },
          ],
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SlideView;
