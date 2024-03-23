import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Header from "../components/Header";
import useTheme from "../hooks/useTheme";
import Sizes from "../config/Sizes";
import BottomSheet from "../components/BottomSheet";
import TaskList from "../components/TaskList";
import TimerCircle from "../components/TimerCircle";
import HomeFooter from "../components/HomeFooter";
import SelectTaskButton from "../components/SelectTaskButton";

const iconSize = 24;
const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const { colors } = useTheme();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <BottomSheet
        bottomSheetContent={<TaskList />}
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
      {/* HEADER */}
      <Header
        title="Focusify"
        textStyle={{ color: colors.white }}
        Left={
          <Image
            source={require("../assets/images/logo-white.png")}
            style={styles.logo}
          />
        }
        Right={
          <Ionicons
            name="notifications-outline"
            size={iconSize}
            color={colors.white}
          />
        }
      />
      <View style={styles.container}>
        <SelectTaskButton onPress={() => setBottomSheetVisible(true)} />
        <View
          style={[styles.bgCircle, { backgroundColor: colors.background }]}
        />
        <View style={styles.circleContainer}>
          <TimerCircle />
          <HomeFooter />
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bgCircle: {
    position: "absolute",
    top: 200,
    width: width * 2,
    height: width * 2,
    borderRadius: width,
  },
  circleContainer: {
    backgroundColor: "red",
    position: "absolute",
    top: 100,
    // height: "100%",
    // justifyContent: "space-between",
  },
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    paddingHorizontal: Sizes.wall,
  },
  logo: {
    height: iconSize,
    width: iconSize,
  },
});
