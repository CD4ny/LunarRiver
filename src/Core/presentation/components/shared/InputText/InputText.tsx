import { useTheme } from '@Core/presentation/context/ThemeProvider';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import stylesInputText from './styles';
import radius from '@Core/presentation/styles/borderRadius';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

type IconName =
  keyof typeof MaterialCommunityIcons.glyphMap;

interface Props {
  name?: string;
  msg?: string;
  placeholder?: string;
  background?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'success'
    | 'error'
    | 'surface'
    | 'background';
  color?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'success'
    | 'error'
    | 'text';
  icon?: IconName;
  type?: 'text' | 'password' | 'email' | 'number';
  onChange?: () => void;
  validate?: () => boolean;
  //   onLongPress?: () => void;
}

export default function InputText({
  name,
  msg,
  type,
  placeholder = '',
  background = 'background',
  color = 'primary',
  icon,
  validate,
  onChange,
}: Props) {
  const [message, setMsg] = useState(msg);
  const { theme } = useTheme();
  const styles = stylesInputText(theme, color, background);
  const colors = theme.colors;
  return (
    <View style={[styles.container]}>
      {name && (
        <View>
          <Text style={[styles.nameText]}>{name}</Text>
        </View>
      )}
      <View style={[styles.inputContainer, radius.input]}>
        {/* <Icon /> */}
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            style={[styles.icon]}
          />
        )}
        <TextInput
          style={[styles.textInput]}
          selectionColor={colors[color]}
          placeholder={placeholder}
          placeholderTextColor={colors.surface}
          secureTextEntry={type === 'password'} // Enable password masking
          keyboardType={
            type === 'email'
              ? 'email-address'
              : type === 'number'
                ? 'numeric'
                : 'default'
          } // Set keyboard type
          onEndEditing={() => {
            validate ? setMsg(msg) : setMsg('');
          }}
          autoCapitalize={
            type === 'password' ? 'none' : 'sentences'
          } // Disable auto-capitalization for passwords and emails
          autoComplete={
            type === 'password' ? 'password' : 'off'
          } // Enable password autocomplete
        ></TextInput>
      </View>
      <View style={{ paddingLeft: 10 }}>
        <Text style={[styles.messageText]}>{message}</Text>
      </View>
    </View>
  );
}
