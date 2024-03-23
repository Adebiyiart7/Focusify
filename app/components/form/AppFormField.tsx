import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import ErrorMessage from "./ErrorMessage";
import useTheme from "../../hooks/useTheme";

interface Props {
  name?: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  secureInput?: boolean;
  otherProps?: TextInputProps;
}

const AppFormField = ({
  name,
  icon,
  onPress,
  style,
  secureInput,
  otherProps,
}: Props) => {
  const { colors } = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [hideSecureInput, setHideSecureInput] = useState(true);
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const iconColor = isFocus ? colors.primary : colors.mediumText;

  const textInputStyle = {
    paddingVertical: 8,
    borderColor: isFocus ? colors.primary : "transparent",
    borderWidth: isFocus ? 2 : 0,
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        style={{ ...styles.icon, color: iconColor }}
        name={icon}
        size={20}
      />
      {secureInput &&
        (hideSecureInput ? (
          <MaterialCommunityIcons
            name="eye-off"
            style={[styles.eye, { color: colors.text }]}
            onPress={() => {
              setHideSecureInput(false);
            }}
          />
        ) : (
          <MaterialCommunityIcons
            name="eye"
            style={[styles.eye, { color: colors.text }]}
            onPress={() => {
              setHideSecureInput(true);
            }}
          />
        ))}
      <TextInput
        style={[
          styles.textInput,
          {
            color: colors.text,
            backgroundColor: colors.background200,
            paddingHorizontal: icon ? 40 : 16,
          },
          isFocus && textInputStyle,
          style,
        ]}
        // name={name}
        onFocus={() => setIsFocus(true)}
        onChangeText={(value) => setFieldValue(name, value)}
        onBlur={() => {
          setFieldTouched(name);
          setIsFocus(false);
        }}
        value={values[name]}
        {...otherProps}
        secureTextEntry={secureInput && hideSecureInput}
        placeholderTextColor={colors.lightText}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </TouchableOpacity>
  );
};

export default AppFormField;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    position: "relative",
  },
  eye: {
    position: "absolute",
    fontSize: 20,
    top: 14,
    right: 14,
    zIndex: 1234,
  },
  textInput: {
    borderRadius: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 14,
    zIndex: 1234,
  },
});
