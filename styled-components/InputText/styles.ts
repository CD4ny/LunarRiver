import { Theme } from "@/context/ThemeProvider";
import { StyleSheet } from "react-native";

const stylesInputText = (
  theme: Theme,
  color: "primary" | "secondary" | "warning" | "success" | "error" | "text",
  background:
    | "primary"
    | "secondary"
    | "warning"
    | "success"
    | "error"
    | "surface"
    | "background"
) => {
  const colors = theme.colors;
  return StyleSheet.create({
    container: { paddingBottom: 6 },
    nameText: {
      color:colors[color],
      fontSize: 18, // Medium font size for names
      marginBottom: 1,
      marginLeft: 10, // Spacing below the name
    },
    inputContainer: {
      backgroundColor: colors[background],
      flexDirection: "row",
      justifyContent: "flex-start",
      borderColor: colors[color],
      borderStyle: "solid",
      shadowColor: "#000",
      shadowOffset: { width: 7, height: 7 },
      shadowOpacity: 0.2,
      elevation: 3,
      padding: 7,
      paddingLeft: 14,
    },
    textInput: {
      cursor: colors[color],
      flex: 1, // TextInput takes up remaining space
      fontSize: 22, // Standard font size for input
      color: colors[color], // Dark gray for text
      fontWeight: "bold",
      padding: 5, // Remove default padding
    },
    icon: {
      color: colors[color],
      textAlign: "center",
      alignSelf: "center",
      fontWeight: "bold",
      fontSize: 28,
    },
    messageText: {
      color: colors.error,
      fontSize: 14, // Smaller font size for messages
      lineHeight: 20, // Improved readability with line height
    },
  });
};

export default stylesInputText;
