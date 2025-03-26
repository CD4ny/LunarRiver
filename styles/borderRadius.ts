import { StyleSheet } from "react-native";

const radius = StyleSheet.create({
  bottomSheet: {
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
  },
  card: {
    padding: 20,
    borderRadius: 18,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  modal: {
    padding: 20,
    borderRadius: 25,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // 50% para ser redondo
  },
  radioOuterCircle: {
    width: 24,
    height: 24,
    borderRadius: 12, // 50% del tamaño
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default radius;
