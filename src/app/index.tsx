import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/theme";

const slides = [
  {
    title: "Your City,\nYour Experts",
    description:
      "Connect with verified local service professionals right in your neighborhood.",
    action: "Continue",
    illustration: "location",
  },
  {
    title: "100+ Services,\nOne Tap Away",
    description:
      "From plumbing to beauty — find and book any local service in seconds.",
    action: "Continue",
    illustration: "services",
  },
  {
    title: "Book with\nConfidence",
    description:
      "Every provider is background-checked, insured, and top-rated by real customers.",
    action: "Get Started",
    illustration: "providers",
  },
] as const;

const serviceTiles = [
  { icon: "construct-outline", label: "Plumbing" },
  { icon: "flash-outline", label: "Electrical" },
  { icon: "home-outline", label: "Cleaning" },
  { icon: "car-outline", label: "Auto" },
  { icon: "cut-outline", label: "Beauty" },
  { icon: "laptop-outline", label: "IT Help" },
] as const;

const pros = [
  { initials: "MJ", name: "Mike J.", service: "Plumbing" },
  { initials: "SD", name: "Sarah D.", service: "Electrical" },
  { initials: "TK", name: "Tom K.", service: "Painting" },
] as const;

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const { height } = useWindowDimensions();
  const compact = height < 700;
  const slide = slides[step];

  const skip = () => router.push("/(auth)/signup");
  const advance = () => {
    if (step === slides.length - 1) {
      router.push("/(auth)/signup");
      return;
    }
    setStep((current) => current + 1);
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.hero}>
          <View pointerEvents="none" style={styles.dotPattern}>
            {Array.from({ length: 28 }, (_, index) => (
              <View key={index} style={styles.dot} />
            ))}
          </View>
          <Pressable
            accessibilityRole="button"
            onPress={skip}
            style={({ pressed }) => [styles.skipButton, pressed && styles.pressed]}
          >
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>

          <View style={styles.illustration}>
            {slide.illustration === "location" ? (
              <LocationArtwork compact={compact} />
            ) : slide.illustration === "services" ? (
              <View style={[styles.serviceGrid, compact && styles.serviceGridCompact]}>
                {serviceTiles.map((tile) => (
                  <View key={tile.label} style={styles.serviceTile}>
                    <Ionicons
                      name={tile.icon}
                      size={compact ? 23 : 26}
                      color={colors.white}
                    />
                    <Text style={styles.serviceLabel}>{tile.label}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <ProviderArtwork compact={compact} />
            )}
          </View>
          <View pointerEvents="none" style={styles.wave} />
        </View>

        <View style={[styles.content, compact && styles.contentCompact]}>
          <View style={styles.copy}>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerControls}>
              {step > 0 ? (
                <Pressable
                  accessibilityLabel="Previous introduction page"
                  accessibilityRole="button"
                  onPress={() => setStep((current) => current - 1)}
                  style={({ pressed }) => [
                    styles.backButton,
                    pressed && styles.pressed,
                  ]}
                >
                  <Ionicons name="chevron-back" size={18} color={colors.muted} />
                </Pressable>
              ) : (
                <View style={styles.backButtonSpacer} />
              )}
              <View style={styles.pagination}>
                {slides.map((item, index) => (
                  <View
                    key={item.title}
                    style={[
                      styles.paginationDot,
                      index === step && styles.paginationDotActive,
                    ]}
                  />
                ))}
              </View>
              <Pressable
                accessibilityRole="button"
                onPress={advance}
                style={({ pressed }) => [
                  styles.primaryButton,
                  pressed && styles.primaryButtonPressed,
                ]}
              >
                <Text style={styles.primaryButtonText}>{slide.action}</Text>
                <Ionicons name="chevron-forward" size={17} color={colors.white} />
              </Pressable>
            </View>
            <Text style={styles.signInPrompt}>
              Already have an account?{" "}
              <Text
                accessibilityRole="link"
                onPress={() => router.push("/(auth)/login")}
                style={styles.signInLink}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function LocationArtwork({ compact }: { compact: boolean }) {
  const floatingIcons = [
    { icon: "home-outline", style: styles.iconHome },
    { icon: "construct-outline", style: styles.iconTools },
    { icon: "flash-outline", style: styles.iconElectric },
    { icon: "car-outline", style: styles.iconCar },
    { icon: "cut-outline", style: styles.iconBeauty },
    { icon: "brush-outline", style: styles.iconPaint },
  ] as const;

  return (
    <View
      style={[
        styles.locationArt,
        compact && styles.locationArtCompact,
      ]}
    >
      <View style={styles.ringOuter} />
      <View style={styles.ringMiddle} />
      <View style={styles.pinContainer}>
        <Ionicons name="location-outline" size={32} color={colors.white} />
      </View>
      {floatingIcons.map((item) => (
        <View key={item.icon} style={[styles.floatingIcon, item.style]}>
          <Ionicons name={item.icon} size={16} color={colors.white} />
        </View>
      ))}
    </View>
  );
}

function ProviderArtwork({ compact }: { compact: boolean }) {
  return (
    <View style={styles.providerArt}>
      <View style={styles.shield}>
        <Ionicons name="shield-checkmark-outline" size={compact ? 25 : 29} color={colors.white} />
      </View>
      <View style={styles.providerCards}>
        {pros.map((pro) => (
          <View key={pro.initials} style={styles.providerCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{pro.initials}</Text>
            </View>
            <View style={styles.providerName}>
              <Text style={styles.proName}>{pro.name}</Text>
              <Text style={styles.proService}>{pro.service}</Text>
            </View>
            <View style={styles.rating}>
              <Text style={styles.stars}>★★★★★</Text>
              <Ionicons name="checkmark-circle-outline" size={13} color="#B9E7C8" />
            </View>
          </View>
        ))}
      </View>
    </View>
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
    backgroundColor: colors.surface,
  },
  hero: {
    flex: 1.12,
    minHeight: 230,
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greenDark,
  },
  dotPattern: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingBottom: 18,
    opacity: 0.35,
  },
  dot: {
    width: 2,
    height: 2,
    margin: 12,
    borderRadius: 1,
    backgroundColor: "#70BD8B",
  },
  skipButton: {
    position: "absolute",
    zIndex: 2,
    right: 18,
    top: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    backgroundColor: "rgba(255,255,255,0.13)",
  },
  skipText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
  },
  illustration: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 16,
  },
  wave: {
    position: "absolute",
    bottom: -23,
    left: "-20%",
    width: "140%",
    height: 48,
    borderRadius: 100,
    backgroundColor: colors.surface,
  },
  locationArt: {
    width: 230,
    height: 210,
    alignItems: "center",
    justifyContent: "center",
  },
  locationArtCompact: {
    width: 210,
    height: 180,
  },
  ringOuter: {
    position: "absolute",
    width: 168,
    height: 168,
    borderRadius: 84,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },
  ringMiddle: {
    position: "absolute",
    width: 126,
    height: 126,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
  },
  pinContainer: {
    width: 62,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.45)",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  floatingIcon: {
    position: "absolute",
    width: 29,
    height: 29,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.28)",
    backgroundColor: "rgba(255,255,255,0.16)",
  },
  iconHome: { top: 8, left: 54 },
  iconTools: { top: 2, right: 18 },
  iconElectric: { top: 42, left: 10 },
  iconCar: { bottom: 42, left: 20 },
  iconBeauty: { bottom: 20, right: 14 },
  iconPaint: { bottom: 1, right: 58 },
  serviceGrid: {
    width: "76%",
    maxWidth: 330,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 9,
    paddingBottom: 10,
  },
  serviceGridCompact: {
    gap: 7,
  },
  serviceTile: {
    width: "30%",
    minWidth: 74,
    maxWidth: 98,
    aspectRatio: 0.98,
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.28)",
    backgroundColor: "rgba(255,255,255,0.16)",
  },
  serviceLabel: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "600",
  },
  providerArt: {
    width: "82%",
    maxWidth: 350,
    alignItems: "center",
    gap: 12,
    paddingBottom: 10,
  },
  shield: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    backgroundColor: "rgba(255,255,255,0.17)",
  },
  providerCards: {
    width: "100%",
    gap: 7,
  },
  providerCard: {
    minHeight: 44,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.24)",
    backgroundColor: "rgba(255,255,255,0.14)",
  },
  avatar: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.27)",
  },
  avatarText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: "700",
  },
  providerName: {
    flex: 1,
    paddingLeft: 9,
    gap: 2,
  },
  proName: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "700",
  },
  proService: {
    color: "#D6F0DF",
    fontSize: 8,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  stars: {
    color: colors.yellow,
    fontSize: 10,
    letterSpacing: -1,
  },
  content: {
    flex: 0.94,
    minHeight: 270,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  contentCompact: {
    paddingTop: 18,
    paddingBottom: 8,
  },
  copy: {
    gap: 9,
  },
  title: {
    color: colors.ink,
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.6,
  },
  description: {
    maxWidth: 360,
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
  },
  footer: {
    gap: 14,
  },
  footerControls: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  backButtonSpacer: {
    width: 42,
  },
  pagination: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#C9DDD0",
  },
  paginationDotActive: {
    width: 18,
    backgroundColor: colors.green,
  },
  primaryButton: {
    minWidth: 150,
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: colors.green,
    elevation: 3,
    shadowColor: colors.greenDark,
    shadowOpacity: 0.17,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  primaryButtonPressed: {
    opacity: 0.84,
    transform: [{ scale: 0.99 }],
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
  signInPrompt: {
    color: colors.muted,
    fontSize: 11,
    textAlign: "center",
  },
  signInLink: {
    color: colors.greenDark,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});
