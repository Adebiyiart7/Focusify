import React, { ReactNode } from "react";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";
import useTheme from "../hooks/useTheme";

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
          <View style={[styles.centeredView, { backgroundColor: "#00000099" }]}>
            <TouchableOpacity
              onPress={() => setBottomSheetVisible(false)}
              style={styles.backdrop}
            ></TouchableOpacity>
            <View
              style={[styles.modalView, { backgroundColor: colors.background }]}
            >
              {bottomSheetContent}
            </View>
          </View>
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
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    width: "100%",
    bottom: 0,
    paddingTop: 20,
    maxHeight: 500,
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
