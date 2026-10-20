import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthField } from "@/components/auth/AuthField";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { colors } from "@/constants/theme";
import { getSupabaseClient } from "@/lib/superbase/client";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const signIn = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Missing details", "Enter your email address and password.");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await getSupabaseClient().auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) {
        throw error;
      }
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert(
        "Unable to sign in",
        error instanceof Error ? error.message : "Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetPassword = async () => {
    if (!email.trim()) {
      Alert.alert("Email required", "Enter your email address first.");
      return;
    }

    try {
      const { error } = await getSupabaseClient().auth.resetPasswordForEmail(
        email.trim(),
      );
      if (error) {
        throw error;
      }
      Alert.alert(
        "Check your inbox",
        "If an account exists for this email, a password reset link is on its way.",
      );
    } catch (error) {
      Alert.alert(
        "Unable to send reset link",
        error instanceof Error ? error.message : "Please try again.",
      );
    }
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.screen}
      >
        <AuthHeader
          title="Welcome back!"
          subtitle="Sign in to LocalServe to continue."
        />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form}>
            <AuthField
              autoCapitalize="none"
              autoComplete="email"
              icon="mail-outline"
              keyboardType="email-address"
              label="EMAIL"
              onChangeText={setEmail}
              placeholder="you@example.com"
              value={email}
            />
            <View style={styles.passwordField}>
              <View style={styles.passwordLabelRow}>
                <Text style={styles.label}>PASSWORD</Text>
                <Pressable
                  accessibilityRole="button"
                  onPress={resetPassword}
                  hitSlop={8}
                >
                  <Text style={styles.forgot}>Forgot?</Text>
                </Pressable>
              </View>
              <AuthField
                autoCapitalize="none"
                autoComplete="current-password"
                icon="lock-closed-outline"
                label="PASSWORD"
                hideLabel
                onChangeText={setPassword}
                placeholder="Enter your password"
                secure
                value={password}
              />
            </View>

            <Pressable
              accessibilityRole="button"
              disabled={submitting}
              onPress={signIn}
              style={({ pressed }) => [
                styles.submitButton,
                pressed && styles.submitPressed,
                submitting && styles.submitDisabled,
              ]}
            >
              <Text style={styles.submitText}>
                {submitting ? "Signing in..." : "Sign In"}
              </Text>
              <Ionicons name="arrow-forward" size={17} color={colors.white} />
            </Pressable>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.dividerLine} />
            </View>
            <View style={styles.socialRow}>
              <SocialButton label="Google" icon="google" />
              <SocialButton label="GitHub" icon="github" />
            </View>
            <Text style={styles.signUpPrompt}>
              Don&apos;t have an account?{" "}
              <Text
                accessibilityRole="link"
                onPress={() => router.push("/(auth)/signup")}
                style={styles.signUpLink}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function SocialButton({
  label,
  icon,
}: {
  label: string;
  icon: "google" | "github";
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() =>
        Alert.alert(
          `${label} sign-in`,
          "Social sign-in is not configured for this project yet.",
        )
      }
      style={({ pressed }) => [styles.socialButton, pressed && styles.submitPressed]}
    >
      <FontAwesome
        name={icon}
        size={15}
        color={icon === "google" ? "#4285F4" : colors.ink}
      />
      <Text style={styles.socialText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  screen: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    maxWidth: 520,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 24,
  },
  form: {
    width: "100%",
    maxWidth: 440,
    alignSelf: "center",
    gap: 17,
  },
  passwordField: {
    gap: 7,
  },
  passwordLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: colors.ink,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.45,
  },
  forgot: {
    color: colors.greenDark,
    fontSize: 10,
    fontWeight: "700",
  },
  submitButton: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 1,
    borderRadius: 12,
    backgroundColor: colors.green,
    elevation: 3,
    shadowColor: colors.greenDark,
    shadowOpacity: 0.16,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  submitPressed: {
    opacity: 0.8,
  },
  submitDisabled: {
    opacity: 0.6,
  },
  submitText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "700",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: -2,
  },
  dividerLine: {
    height: 1,
    flex: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    color: colors.muted,
    fontSize: 10,
  },
  socialRow: {
    flexDirection: "row",
    gap: 10,
  },
  socialButton: {
    height: 43,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  socialText: {
    color: colors.ink,
    fontSize: 11,
    fontWeight: "600",
  },
  signUpPrompt: {
    color: colors.muted,
    fontSize: 11,
    textAlign: "center",
    marginTop: 2,
  },
  signUpLink: {
    color: colors.greenDark,
    fontWeight: "700",
  },
});
