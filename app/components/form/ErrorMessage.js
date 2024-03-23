import { StyleSheet, Text } from "react-native";
import React from "react";

// LOCAL IMPORTS
import useTheme from "../../hooks/useTheme";

const ErrorMessage = ({ visible, error }) => {
  const { colors } = useTheme();

  if (!visible || !error) return null;
  return <Text style={[styles.error, { color: colors.danger }]}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    marginTop: 3,
  },
});
