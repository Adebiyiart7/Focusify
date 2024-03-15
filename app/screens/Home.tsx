import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../hooks/useTheme";
import { StatusBar } from "expo-status-bar";
import SelectTaskButton from "../components/SelectTaskButton";
import Sizes from "../config/Sizes";
import BottomSheet from "../components/BottomSheet";
import TaskList from "../components/TaskList";

const iconSize = 24;

const Home = () => {
  const { colors } = useTheme();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(true);

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
      <View style={{ alignItems: "center", paddingHorizontal: Sizes.wall }}>
        <SelectTaskButton onPress={() => setBottomSheetVisible(true)} />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    height: iconSize,
    width: iconSize,
  },
});
