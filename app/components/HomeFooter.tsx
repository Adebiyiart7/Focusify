import { StyleSheet, View } from "react-native";
import React from "react";
import AppButton from "./AppButton";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";
import HomeActionButton from "./HomeActionButton";

const HomeFooter = () => {
  const { colors } = useTheme();

  const iconSize = 28;
  const iconColor = colors.mediumText;

  return (
    <View style={styles.container}>
      <View style={{ maxWidth: 220 }}>
        <AppButton
          title="Start to Focus"
          onPress={() => {}}
          startIcon={
            <Ionicons
              name="play"
              size={Sizes.buttonIcon}
              color={colors.white}
            />
          }
        />
      </View>
      <View style={styles.actions}>
        <HomeActionButton
          text={"Strict Mode"}
          Icon={
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={iconSize}
              color={iconColor}
            />
          }
        />
        <HomeActionButton
          text={"Timer Mode"}
          Icon={
            <MaterialCommunityIcons
              name="timer-sand-empty"
              size={iconSize}
              color={iconColor}
            />
          }
        />
        <HomeActionButton
          text={"White Noise"}
          Icon={
            <Ionicons
              name="musical-notes-outline"
              size={iconSize}
              color={iconColor}
            />
          }
        />
      </View>
    </View>
  );
};

export default HomeFooter;

const styles = StyleSheet.create({
  actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    marginTop: "auto",
    // position: "absolute",
    // bottom: 0,
    marginBottom: Sizes.wall,
    width: "100%",
    alignItems: "center",
    gap: 50,
  },
});
