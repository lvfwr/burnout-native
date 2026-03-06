import { StyleSheet, Platform } from "react-native";

export const colors = {
  orange: "#f97316",
  orangeDark: "#c2410c",
  orangeGlow: "rgba(249, 115, 22, 0.25)",
  black: "#0a0a0a",
  blackSoft: "#111111",
  blackCard: "#1a1a1a",
  blackBorder: "#2a2a2a",
  white: "#f5f0eb",
  whiteDim: "rgba(245, 240, 235, 0.6)",
  errorBg: "rgba(248, 113, 113, 0.08)",
  errorText: "#f87171",
  ctaGradientStart: "#1a0a00",
};

// ─── App / Navigation ────────────────────────────────────────────────────────

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  header: {
    backgroundColor: "rgba(10,10,10,0.97)",
    borderBottomWidth: 1,
    borderBottomColor: colors.blackBorder,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    ...Platform.select({
      ios: { paddingTop: 0 },
      android: { paddingTop: 0 },
    }),
  },
  navList: {
    flexDirection: "row",
    gap: 28,
  },
  navLink: {
    color: colors.whiteDim,
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  navLinkActive: {
    color: colors.orange,
  },
});

// ─── Shared / Page ───────────────────────────────────────────────────────────

export const pageStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroStyles = StyleSheet.create({
  hero: {
    paddingHorizontal: 28,
    paddingTop: 64,
    paddingBottom: 56,
    alignItems: "center",
  },
  heroContent: {
    width: "100%",
    maxWidth: 560,
  },
  heroEyebrow: {
    alignSelf: "flex-start",
    color: colors.orange,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2.5,
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: colors.orangeDark,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: "rgba(249,115,22,0.08)",
    overflow: "hidden",
  },
  heroTitle: {
    fontSize: 60,
    lineHeight: 62,
    letterSpacing: 1,
    color: colors.white,
    marginBottom: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  heroAccent: {
    color: colors.orange,
  },
  heroSubtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: colors.whiteDim,
    marginBottom: 32,
  },
  heroVisual: {
    width: 240,
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  heroCenterpiece: {
    fontSize: 72,
    zIndex: 2,
  },
  heroRing: {
    position: "absolute",
    borderRadius: 200,
    borderWidth: 1,
  },
  heroRing1: {
    width: 200,
    height: 200,
    borderColor: "rgba(249,115,22,0.25)",
  },
  heroRing2: {
    width: 140,
    height: 140,
    borderColor: "rgba(249,115,22,0.12)",
  },
});

// ─── Buttons ─────────────────────────────────────────────────────────────────

export const buttonStyles = StyleSheet.create({
  ctaButton: {
    backgroundColor: colors.orange,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  ctaButtonText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  ctaButtonDark: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.orange,
  },
  ctaButtonDarkText: {
    color: colors.orange,
  },
  ctaButtonCenter: {
    alignSelf: "center",
  },
});

// ─── Features Section ─────────────────────────────────────────────────────────

export const featureStyles = StyleSheet.create({
  features: {
    paddingHorizontal: 24,
    paddingVertical: 64,
    backgroundColor: colors.blackSoft,
    borderTopWidth: 1,
    borderTopColor: colors.blackBorder,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: "900",
    letterSpacing: 2,
    color: colors.white,
    textAlign: "center",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  sectionSubtitle: {
    textAlign: "center",
    color: colors.whiteDim,
    fontSize: 15,
    marginBottom: 40,
    lineHeight: 22,
  },
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    backgroundColor: colors.blackCard,
    borderWidth: 1,
    borderColor: colors.blackBorder,
    padding: 28,
    borderRadius: 12,
  },
  featureIcon: {
    fontSize: 28,
    marginBottom: 12,
  },
  featureCardTitle: {
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: colors.orange,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  featureCardText: {
    color: colors.whiteDim,
    lineHeight: 24,
    fontSize: 14,
  },
});

// ─── CTA Banner ───────────────────────────────────────────────────────────────

export const ctaBannerStyles = StyleSheet.create({
  ctaBanner: {
    paddingHorizontal: 24,
    paddingVertical: 64,
    backgroundColor: colors.ctaGradientStart,
    borderTopWidth: 1,
    borderTopColor: colors.blackBorder,
    alignItems: "center",
  },
  ctaBannerTitle: {
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 2,
    color: colors.white,
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
  ctaBannerText: {
    color: colors.whiteDim,
    fontSize: 15,
    marginBottom: 28,
    textAlign: "center",
    lineHeight: 22,
  },
});

// ─── Stats ────────────────────────────────────────────────────────────────────

export const statsStyles = StyleSheet.create({
  statsSection: {
    paddingHorizontal: 24,
    paddingVertical: 64,
    backgroundColor: colors.black,
    borderTopWidth: 1,
    borderTopColor: colors.blackBorder,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  statCard: {
    flex: 1,
    minWidth: 140,
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 16,
    backgroundColor: colors.blackCard,
    borderWidth: 1,
    borderColor: colors.blackBorder,
    borderRadius: 12,
  },
  statNumber: {
    fontSize: 40,
    fontWeight: "900",
    color: colors.orange,
    letterSpacing: 1.5,
    lineHeight: 44,
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: colors.whiteDim,
    textAlign: "center",
  },
});

// ─── Members ─────────────────────────────────────────────────────────────────

export const memberStyles = StyleSheet.create({
  membersSection: {
    backgroundColor: colors.blackSoft,
  },
  membersGrid: {
    gap: 16,
  },
  memberCard: {
    backgroundColor: colors.blackCard,
    borderWidth: 1,
    borderColor: colors.blackBorder,
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  memberAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.orangeDark,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  memberAvatarText: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.black,
    letterSpacing: 1,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
    color: colors.white,
    marginBottom: 3,
    textTransform: "uppercase",
  },
  memberRole: {
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    color: colors.orange,
  },
  memberSpecialty: {
    fontSize: 13,
    color: colors.whiteDim,
    marginTop: 4,
  },
});

// ─── Modal ───────────────────────────────────────────────────────────────────

export const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  content: {
    backgroundColor: colors.blackSoft,
    borderWidth: 1,
    borderColor: colors.blackBorder,
    borderRadius: 16,
    width: "100%",
    maxWidth: 680,
    maxHeight: "90%",
    overflow: "hidden",
  },
  header: {
    backgroundColor: colors.blackCard,
    borderBottomWidth: 1,
    borderBottomColor: colors.blackBorder,
    paddingHorizontal: 28,
    paddingVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: colors.orange,
    textTransform: "uppercase",
    flex: 1,
  },
  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.blackBorder,
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    fontSize: 20,
    color: colors.whiteDim,
    lineHeight: 22,
  },
  body: {
    padding: 24,
  },
});

// ─── Registration Form ────────────────────────────────────────────────────────

export const formStyles = StyleSheet.create({
  formContainer: {
    backgroundColor: "transparent",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  rowItem: {
    flex: 1,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontWeight: "700",
    color: colors.whiteDim,
    marginBottom: 7,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: colors.blackBorder,
    borderRadius: 8,
    fontSize: 15,
    backgroundColor: colors.blackCard,
    color: colors.white,
  },
  inputFocused: {
    borderColor: colors.orange,
    backgroundColor: colors.blackSoft,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  errorBox: {
    backgroundColor: colors.errorBg,
    borderLeftWidth: 3,
    borderLeftColor: colors.errorText,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: 5,
  },
  errorText: {
    color: colors.errorText,
    fontSize: 12,
    fontWeight: "600",
  },
  termsGroup: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 20,
    backgroundColor: colors.blackCard,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.blackBorder,
  },
  termsCheckbox: {
    marginTop: 2,
  },
  termsLabel: {
    flex: 1,
    color: colors.whiteDim,
    fontSize: 14,
    lineHeight: 20,
  },
  submitButton: {
    backgroundColor: colors.orange,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  submitButtonDisabled: {
    opacity: 0.4,
  },
  submitButtonText: {
    color: colors.black,
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
});