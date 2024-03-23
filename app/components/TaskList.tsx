import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheetHeader from "./BottomSheetHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";
import AppFormField from "./form/AppFormField";
import { Formik } from "formik";
import AppPressable from "./AppPressable";
import AppText from "./AppText";
import Divider from "./Divider";
import tasks from "../data/tasks";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { colors } = useTheme();

  return (
    <View>
      <BottomSheetHeader
        title={"Select Task"}
        IconRight={
          <AppPressable onPress={() => {}} scale={0.9} opacity={0.9}>
            <MaterialCommunityIcons
              name="plus"
              color={colors.primary}
              size={Sizes.bottomSheetHeaderIcon}
            />
          </AppPressable>
        }
      />
      <View style={{ padding: Sizes.wall, paddingBottom: 0 }}>
        <Formik initialValues={{ searchInput: "" }} onSubmit={() => {}}>
          {() => (
            <AppFormField
              icon="text-search"
              onPress={() => {}}
              otherProps={{ placeholder: "Search task..." }}
            />
          )}
        </Formik>
        <View style={styles.subTitleContainer}>
          <AppText style={styles.subTitleText} color={colors.mediumText}>
            Today Tasks
          </AppText>
          <Divider style={{ flex: 1, marginTop: 2 }} />
        </View>
      </View>

      <FlatList
        data={tasks}
        style={{ marginBottom: 60 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: Sizes.md, padding: Sizes.wall }}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListFooterComponent={<View style={{ marginBottom: 120 }} />}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  subTitleText: {
    fontWeight: "500",
    fontSize: Sizes.sm,
  },
  subTitleContainer: {
    flexDirection: "row",
    gap: Sizes.md,
    alignItems: "center",
    marginTop: Sizes.xs,
  },
});
