import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheetHeader from "./BottomSheetHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";
import AppFormField from "./form/AppFormField";
import { Formik } from "formik";
import AppPressable from "./AppPressable";

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
      <View style={{ padding: Sizes.wall }}>
        <Formik initialValues={{ searchInput: "" }} onSubmit={() => {}}>
          {() => (
            <AppFormField
              icon="text-search"
              onPress={() => {}}
              otherProps={{ placeholder: "Search task..." }}
            />
          )}
        </Formik>
      </View>
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});
