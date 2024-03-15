import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Duration from "../config/Duration";

const useZoomIn = (duration = Duration.onLoading) => {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [duration, scale]);

  return scale;
};

export default useZoomIn;
