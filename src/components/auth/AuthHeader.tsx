import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityLabel="Go back"
        accessibilityRole="button"
        onPress={() => router.back()}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
      >
        <Ionicons name="chevron-back" size={19} color={colors.white} />
      </Pressable>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 142,
    justifyContent: "flex-end",
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 22,
    backgroundColor: colors.greenDark,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
  },
  backButton: {
    position: "absolute",
    top: 12,
    left: 20,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.19)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.26)",
  },
  pressed: {
    opacity: 0.75,
  },
  copy: {
    gap: 5,
  },
  title: {
    color: colors.white,
    fontSize: 23,
    fontWeight: "700",
    letterSpacing: -0.4,
  },
  subtitle: {
    color: "#E2F3E8",
    fontSize: 13,
  },
});
