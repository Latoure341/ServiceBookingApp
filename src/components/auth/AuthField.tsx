import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type KeyboardTypeOptions,
  type TextInputProps,
} from "react-native";
import { colors } from "@/constants/theme";

interface AuthFieldProps {
  label: string;
  placeholder: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  secure?: boolean;
  autoComplete?: TextInputProps["autoComplete"];
  hideLabel?: boolean;
}

export function AuthField({
  label,
  placeholder,
  icon,
  value,
  onChangeText,
  keyboardType = "default",
  autoCapitalize = "sentences",
  secure = false,
  autoComplete,
  hideLabel = false,
}: AuthFieldProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isPassword = secure;

  return (
    <View style={styles.field}>
      {!hideLabel ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.inputContainer}>
        <Ionicons name={icon} size={17} color={colors.green} />
        <TextInput
          accessibilityLabel={label}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8B9B91"
          returnKeyType="next"
          secureTextEntry={isPassword && !passwordVisible}
          selectionColor={colors.green}
          style={styles.input}
          value={value}
        />
        {isPassword ? (
          <Pressable
            accessibilityLabel={passwordVisible ? "Hide password" : "Show password"}
            accessibilityRole="button"
            hitSlop={8}
            onPress={() => setPasswordVisible((visible) => !visible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={18}
              color={colors.green}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: 7,
  },
  label: {
    color: colors.ink,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.45,
  },
  inputContainer: {
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 0,
    color: colors.ink,
    fontSize: 13,
  },
});
