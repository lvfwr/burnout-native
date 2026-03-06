import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  pageStyles,
  heroStyles,
  featureStyles,
  memberStyles,
  ctaBannerStyles,
  buttonStyles,
} from "../styles";

const members = [
  {
    name: "Ash Rivera",
    role: "Digital Illustrator",
    specialty: "Character Design",
    initials: "AR",
  },
  {
    name: "Kai Vin",
    role: "Concept Artist",
    specialty: "Environment & Worldbuilding",
    initials: "KV",
  },
  {
    name: "Maria Lilan",
    role: "Brand Designer",
    specialty: "Visual Identity",
    initials: "ML",
  },
  {
    name: "Davin Ombre",
    role: "Motion Artist",
    specialty: "Animation & Loops",
    initials: "DO",
  },
  {
    name: "Sheena Jin",
    role: "Photographer",
    specialty: "Fine Art & Portrait",
    initials: "SJ",
  },
  {
    name: "Nico Blaze",
    role: "Muralist",
    specialty: "Street & Large Format",
    initials: "NB",
  },
];

export default function MembersPage() {
  const navigation = useNavigation();

  return (
    <View style={pageStyles.page}>
      <ScrollView
        contentContainerStyle={pageStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={heroStyles.hero}>
          <View style={heroStyles.heroContent}>
            <Text style={heroStyles.heroEyebrow}>The Collective</Text>
            <Text style={heroStyles.heroTitle}>
              Meet the{" "}
              <Text style={heroStyles.heroAccent}>Artists.</Text>
            </Text>
            <Text style={heroStyles.heroSubtitle}>
              These are the minds and hands behind BurnOut Studio — each one a
              flame in their own right.
            </Text>
          </View>
        </View>

        {/* Members Grid */}
        <View style={[featureStyles.features, memberStyles.membersSection]}>
          <Text style={featureStyles.sectionTitle}>Our Members</Text>
          <Text style={featureStyles.sectionSubtitle}>
            Creatives from every corner of the art world, united by one studio.
          </Text>
          <View style={memberStyles.membersGrid}>
            {members.map((m) => (
              <View key={m.name} style={memberStyles.memberCard}>
                <View style={memberStyles.memberAvatar}>
                  <Text style={memberStyles.memberAvatarText}>{m.initials}</Text>
                </View>
                <View style={memberStyles.memberInfo}>
                  <Text style={memberStyles.memberName}>{m.name}</Text>
                  <Text style={memberStyles.memberRole}>{m.role}</Text>
                  <Text style={memberStyles.memberSpecialty}>
                    ✦ {m.specialty}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Banner */}
        <View style={ctaBannerStyles.ctaBanner}>
          <Text style={ctaBannerStyles.ctaBannerTitle}>
            Want to be listed here?
          </Text>
          <Text style={ctaBannerStyles.ctaBannerText}>
            Register and submit your portfolio to become an official BurnOut
            member.
          </Text>
          <TouchableOpacity
            style={[
              buttonStyles.ctaButton,
              buttonStyles.ctaButtonDark,
              buttonStyles.ctaButtonCenter,
            ]}
            onPress={() => navigation.navigate("Home" as never)}
            activeOpacity={0.85}
          >
            <Text
              style={[buttonStyles.ctaButtonText, buttonStyles.ctaButtonDarkText]}
            >
              Apply to Join
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}