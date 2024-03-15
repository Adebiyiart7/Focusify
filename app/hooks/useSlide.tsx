import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Sizes from "../config/Sizes";

export interface UseSlideProps {
  value?: number;
  negative?: boolean;
}

const useSlide = ({ negative, value = Sizes.lg }: UseSlideProps) => {
  const translate = useRef(
    new Animated.Value(negative ? value : -value)
  ).current;

  const dampingRatio = 15;
  const stiffness = 50 * (1 - dampingRatio / 100);

  const animate = Animated.spring(translate, {
    toValue: 0,
    damping: dampingRatio,
    stiffness: stiffness,
    useNativeDriver: true,
  });

  useEffect(() => {
    animate.start();
  }, [value, translate]);

  return { translate };
};

export default useSlide;
