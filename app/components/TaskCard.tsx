import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Task } from "../data/tasks";
import AppText from "./AppText";
import AppPressable from "./AppPressable";
import useTheme from "../hooks/useTheme";
import Sizes from "../config/Sizes";
import Tag from "./Tag";

interface Props {
  task: Task;
}

const { width: screenWidth } = Dimensions.get("window");

const TaskCard = ({ task }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          borderTopColor: colors.border100,
          borderBottomColor: colors.border100,
          borderRightColor: colors.border100,
          borderLeftColor: task.colorCode,
        },
      ]}
    >
      <AppPressable onPress={() => {}} style={styles.left}>
        <MaterialCommunityIcons
          size={24}
          color={colors.primary}
          name="checkbox-blank-circle-outline"
        />
      </AppPressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={styles.center}>
          <AppText style={styles.title} numberOfLines={1}>
            {task.title}
          </AppText>
          <FlatList
            horizontal
            data={task.tags}
            contentContainerStyle={{ gap: 4, marginTop: 4 }}
            renderItem={({ item }) => <Tag tag={item} />}
          />
        </View>
        <View style={styles.right}>
          <AppPressable onPress={() => {}}>
            <MaterialCommunityIcons
              name="play-circle"
              size={30}
              color={colors.primary}
            />
          </AppPressable>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    padding: Sizes.sm,
    borderWidth: 1,
    borderLeftWidth: 3,
    borderRadius: 10,
    flexDirection: "row",
    gap: Sizes.sm,
  },
  center: {},
  left: {},
  right: {},
  title: {
    fontWeight: "500",
    fontSize: Sizes.md,
    width: screenWidth - 125,
  },
});
