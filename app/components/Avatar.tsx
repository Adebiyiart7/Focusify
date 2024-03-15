import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import useTheme from "../hooks/useTheme";

const Avatar = React.memo(() => {
  const { colors } = useTheme();

  return (
    <Pressable>
      <Image
        source={require("../assets/images/joseph.jpg")}
        style={styles.avatar}
      />
      <View
        style={[
          styles.isActive,
          { borderColor: colors.background, backgroundColor: colors.primary },
        ]}
      />
    </Pressable>
  );
});

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  isActive: {
    height: 15,
    width: 15,
    position: "absolute",
    borderRadius: 8,
    bottom: -3,
    left: -3,
    borderWidth: 3,
  },
});
