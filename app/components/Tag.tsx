import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tag as TaskTag } from "../data/tags";
import AppText from "./AppText";
import Sizes from "../config/Sizes";

const Tag = React.memo(({ tag }: { tag: TaskTag }) => {
  return (
    <AppText
      style={{ fontStyle: "italic", fontWeight: "500" }}
      color={tag.colorCode}
      fontSize={Sizes.sm}
    >
      #{tag.title}
    </AppText>
  );
});

export default Tag;
