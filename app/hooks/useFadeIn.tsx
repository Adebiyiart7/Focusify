import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Duration from "../config/Duration";

const useFadeIn = (duration = 300) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [duration, opacity]);

  return opacity;
};

export default useFadeIn;
