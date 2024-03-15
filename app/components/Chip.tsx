import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

import AppText from "./AppText";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";

interface Props {
  text: string;
}

const Chip = React.memo(({ text }: Props) => {
  const { colors } = useTheme();
  const [active, setActive] = useState(false);

  return (
    <Pressable
      onPress={() => setActive(!active)}
      style={{
        backgroundColor: active ? colors.background : colors.background2,
      }}
    >
      <AppText
        fontSize={Sizes.sm}
        style={[
          styles.text,
          {
            borderWidth: active ? 1.5 : 1,
            borderColor: active ? colors.primary : colors.border,
          },
        ]}
      >
        {text}
      </AppText>
    </Pressable>
  );
});

export default Chip;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    textTransform: "capitalize",
  },
});
