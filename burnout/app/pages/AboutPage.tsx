import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  pageStyles,
  heroStyles,
  featureStyles,
  buttonStyles,
} from "../styles";

const cards = [
  {
    title: "Mission",
    text: "Providing secure, fast, and user-friendly registration experiences for all our users worldwide.",
  },
  {
    title: "Vision",
    text: "Building the most trusted platform for user onboarding with cutting-edge technology.",
  },
  {
    title: "Values",
    text: "Security, simplicity, and customer satisfaction drive everything we do.",
  },
];

export default function AboutPage() {
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
            <Text style={heroStyles.heroTitle}>About Us</Text>
            <Text style={heroStyles.heroSubtitle}>
              Discover who we are and what makes our platform the perfect choice
              for seamless registration and user experience.
            </Text>
            <TouchableOpacity
              style={buttonStyles.ctaButton}
              onPress={() => navigation.navigate("Home" as never)}
              activeOpacity={0.85}
            >
              <Text style={buttonStyles.ctaButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Our Story */}
        <View style={featureStyles.features}>
          <Text style={featureStyles.sectionTitle}>Our Story</Text>
          <View style={featureStyles.featuresGrid}>
            {cards.map((c) => (
              <View key={c.title} style={featureStyles.featureCard}>
                <Text style={featureStyles.featureCardTitle}>{c.title}</Text>
                <Text style={featureStyles.featureCardText}>{c.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}