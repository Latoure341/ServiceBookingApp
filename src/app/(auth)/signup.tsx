import { Ionicons } from "@expo/vector-icons";
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

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const createAccount = async () => {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert("Missing details", "Complete all required fields to continue.");
      return;
    }
    if (password.length < 8) {
      Alert.alert(
        "Choose a stronger password",
        "Your password must be at least 8 characters long.",
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match", "Check the passwords and try again.");
      return;
    }
    if (!acceptedTerms) {
      Alert.alert(
        "Terms required",
        "Please agree to the Terms of Service and Privacy Policy to continue.",
      );
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await getSupabaseClient().auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: name.trim(),
            phone: phone.trim() || null,
          },
        },
      });
      if (error) {
        throw error;
      }
      if (data.session) {
        router.replace("/(tabs)");
      } else {
        Alert.alert(
          "Check your email",
          "Your account is ready. Follow the verification link we sent, then sign in.",
          [{ text: "Continue", onPress: () => router.replace("/(auth)/login") }],
        );
      }
    } catch (error) {
      Alert.alert(
        "Unable to create account",
        error instanceof Error ? error.message : "Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.screen}
      >
        <AuthHeader
          title="Create Account"
          subtitle="Join LocalServe — your city, simplified."
        />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form}>
            <AuthField
              autoComplete="name"
              icon="person-outline"
              label="FULL NAME"
              onChangeText={setName}
              placeholder="John Doe"
              value={name}
            />
            <AuthField
              autoCapitalize="none"
              autoComplete="email"
              icon="mail-outline"
              keyboardType="email-address"
              label="EMAIL ADDRESS"
              onChangeText={setEmail}
              placeholder="you@example.com"
              value={email}
            />
            <AuthField
              autoComplete="tel"
              icon="call-outline"
              keyboardType="phone-pad"
              label="PHONE (OPTIONAL)"
              onChangeText={setPhone}
              placeholder="+1 (555) 000-0000"
              value={phone}
            />
            <AuthField
              autoCapitalize="none"
              autoComplete="new-password"
              icon="lock-closed-outline"
              label="PASSWORD"
              onChangeText={setPassword}
              placeholder="Create a strong password"
              secure
              value={password}
            />
            <AuthField
              autoCapitalize="none"
              autoComplete="new-password"
              icon="lock-closed-outline"
              label="CONFIRM PASSWORD"
              onChangeText={setConfirmPassword}
              placeholder="Repeat your password"
              secure
              value={confirmPassword}
            />

            <Pressable
              accessibilityRole="checkbox"
              accessibilityState={{ checked: acceptedTerms }}
              onPress={() => setAcceptedTerms((accepted) => !accepted)}
              style={styles.termsRow}
            >
              <View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
                {acceptedTerms ? (
                  <Ionicons name="checkmark" size={12} color={colors.white} />
                ) : null}
              </View>
              <Text style={styles.termsText}>
                I agree to the <Text style={styles.termsLink}>Terms of Service</Text>{" "}
                and <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              disabled={submitting}
              onPress={createAccount}
              style={({ pressed }) => [
                styles.submitButton,
                pressed && styles.submitPressed,
                submitting && styles.submitDisabled,
              ]}
            >
              <Text style={styles.submitText}>
                {submitting ? "Creating account..." : "Create Account"}
              </Text>
              <Ionicons name="arrow-forward" size={17} color={colors.white} />
            </Pressable>
            <Text style={styles.signInPrompt}>
              Already have an account?{" "}
              <Text
                accessibilityRole="link"
                onPress={() => router.replace("/(auth)/login")}
                style={styles.signInLink}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 22,
  },
  form: {
    width: "100%",
    maxWidth: 440,
    alignSelf: "center",
    gap: 13,
  },
  termsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
    paddingTop: 1,
  },
  checkbox: {
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  checkboxChecked: {
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
  termsText: {
    flex: 1,
    color: colors.muted,
    fontSize: 10,
    lineHeight: 15,
  },
  termsLink: {
    color: colors.greenDark,
    fontWeight: "700",
  },
  submitButton: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
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
  signInPrompt: {
    color: colors.muted,
    fontSize: 11,
    textAlign: "center",
    marginTop: 1,
  },
  signInLink: {
    color: colors.greenDark,
    fontWeight: "700",
  },
});
