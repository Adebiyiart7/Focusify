import React, { ReactNode } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import useTheme from "../hooks/useTheme";
import Sizes from "../config/Sizes";

interface Props {
  bottomSheetVisible: boolean;
  setBottomSheetVisible: (value: boolean) => void;
  bottomSheetContent: ReactNode;
}

const BottomSheet = React.memo(
  ({
    bottomSheetVisible,
    setBottomSheetVisible,
    bottomSheetContent,
  }: Props) => {
    const { colors } = useTheme();

    return (
      <View>
        <Modal
          statusBarTranslucent
          animationType="fade"
          transparent={true}
          visible={bottomSheetVisible}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.centeredView, { backgroundColor: "#00000099" }]}
          >
            <Pressable
              onPress={() => setBottomSheetVisible(false)}
              style={styles.backdrop}
            ></Pressable>
            <View
              style={[styles.modalView, { backgroundColor: colors.background }]}
            >
              {bottomSheetContent}
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
  },
  closeButtonContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  modalView: {
    borderTopStartRadius: Sizes.md,
    borderTopEndRadius: Sizes.md,
    width: "100%",
    bottom: 0,
    paddingTop: 20,
    maxHeight: "80%",
  },

  modalText: {
    marginBottom: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BottomSheet;
