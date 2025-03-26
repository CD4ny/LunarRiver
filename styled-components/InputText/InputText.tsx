import { useTheme } from "@/context/ThemeProvider";
import { StyleSheet, Text, View, TextInput } from "react-native";
import stylesInputText from "./styles";
import radius from "@/styles/borderRadius";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface Props  {
  name?: string;
  msg?: string;
  background?:
    | "primary"
    | "secondary"
    | "warning"
    | "success"
    | "error"
    | "surface"
    | "background";
  color?: "primary" | "secondary" | "warning" | "success" | "error" | "text";
  icon?:IconName;
  onChange?: () => void;
  validate?: () => boolean;
  //   onLongPress?: () => void;
}

export default function InputText({
  name,
  msg,
  background = "background",
  color = "primary",
  icon,
  onChange,
}: Props) {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const styles = stylesInputText(theme, color, background);
  const colors = theme.colors
  return (
    <View style={[styles.container]}>
      {name && (
        <View>
          <Text style={[styles.nameText]}>{name}</Text>
        </View>
      )}
      <View style={[styles.inputContainer, radius.input]}>
        {/* <Icon /> */}
        {icon&&
        <MaterialCommunityIcons name={icon} style={[styles.icon]} />
        }
        <TextInput style={[styles.textInput]} selectionColor={colors[color]}></TextInput>
      </View>
      <View style={{ paddingLeft: 10 }}>
        <Text style={[styles.messageText]}>{msg}</Text>
      </View>
    </View>
  );
}
