import React, { ReactNode } from "react";

import AppText from "./AppText";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";
import AppPressable from "./AppPressable";

interface Props {
  Icon: ReactNode;
  text: string;
}

const HomeActionButton = React.memo(({ text, Icon }: Props) => {
  const { colors } = useTheme();

  return (
    <AppPressable
      scale={0.95}
      opacity={0.8}
      onPress={() => {}}
      style={{ alignItems: "center" }}
    >
      {Icon}
      <AppText fontSize={Sizes.sm} color={colors.mediumText}>
        {text}
      </AppText>
    </AppPressable>
  );
});

export default HomeActionButton;
