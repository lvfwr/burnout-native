import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import RegistrationForm from "../components/RegistrationForm";
import Modal from "../components/Modal";
import {
  pageStyles,
  heroStyles,
  featureStyles,
  ctaBannerStyles,
  buttonStyles,
} from "../styles";

const features = [
  {
    icon: "🎨",
    title: "Digital Art",
    text: "From concept to canvas — our artists craft vivid digital worlds that leave a mark long after you look away.",
  },
  {
    icon: "✏️",
    title: "Illustration",
    text: "Characters, scenes, and stories told through hand-crafted illustration with a signature BurnOut edge.",
  },
  {
    icon: "⚡",
    title: "Design & Brand",
    text: "Bold identities built for brands that refuse to blend in. We design for impact, not just aesthetics.",
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={pageStyles.page}>
      <ScrollView
        contentContainerStyle={pageStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={heroStyles.hero}>
          <View style={heroStyles.heroContent}>
            <Text style={heroStyles.heroEyebrow}>Est. 2024</Text>
            <Text style={heroStyles.heroTitle}>
              Where Art {"\n"}
              <Text style={heroStyles.heroAccent}>Ignites.</Text>
            </Text>
            <Text style={heroStyles.heroSubtitle}>
              BurnOut Studio is a collective of bold creatives pushing
              boundaries through digital art, illustration, and design. Join the
              fire.
            </Text>
            <TouchableOpacity
              style={buttonStyles.ctaButton}
              onPress={() => setIsModalOpen(true)}
              activeOpacity={0.85}
            >
              <Text style={buttonStyles.ctaButtonText}>Join the Studio</Text>
            </TouchableOpacity>
          </View>

          {/* Decorative Visual */}
          <View style={heroStyles.heroVisual}>
            <View style={[heroStyles.heroRing, heroStyles.heroRing1]} />
            <View style={[heroStyles.heroRing, heroStyles.heroRing2]} />
            <Text style={heroStyles.heroCenterpiece}>🔥</Text>
          </View>
        </View>

        {/* Features */}
        <View style={featureStyles.features}>
          <Text style={featureStyles.sectionTitle}>What We Do</Text>
          <Text style={featureStyles.sectionSubtitle}>
            Every piece we create carries heat — raw, intentional,
            unforgettable.
          </Text>
          <View style={featureStyles.featuresGrid}>
            {features.map((f) => (
              <View key={f.title} style={featureStyles.featureCard}>
                <Text style={featureStyles.featureIcon}>{f.icon}</Text>
                <Text style={featureStyles.featureCardTitle}>{f.title}</Text>
                <Text style={featureStyles.featureCardText}>{f.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Banner */}
        <View style={ctaBannerStyles.ctaBanner}>
          <Text style={ctaBannerStyles.ctaBannerTitle}>
            Ready to burn bright?
          </Text>
          <Text style={ctaBannerStyles.ctaBannerText}>
            Register now and become part of the BurnOut community.
          </Text>
          <TouchableOpacity
            style={[
              buttonStyles.ctaButton,
              buttonStyles.ctaButtonDark,
              buttonStyles.ctaButtonCenter,
            ]}
            onPress={() => setIsModalOpen(true)}
            activeOpacity={0.85}
          >
            <Text
              style={[buttonStyles.ctaButtonText, buttonStyles.ctaButtonDarkText]}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Registration Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </View>
  );
}