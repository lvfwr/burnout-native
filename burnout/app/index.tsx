import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MembersPage from "./pages/MembersPage";
import { appStyles, colors } from "./styles";

const Stack = createNativeStackNavigator();

function Header() {
  const navigation = useNavigation();
  const route = useRoute();

  const links = [
    { label: "Home", screen: "Home" },
    { label: "About", screen: "About" },
    { label: "Members", screen: "Members" },
  ];

  return (
    <View style={appStyles.header}>
      <View style={appStyles.navList}>
        {links.map((link) => (
          <TouchableOpacity
            key={link.screen}
            onPress={() => navigation.navigate(link.screen as never)}
          >
            <Text
              style={[
                appStyles.navLink,
                route.name === link.screen && appStyles.navLinkActive,
              ]}
            >
              {link.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={appStyles.container}>
        <Stack.Navigator
          screenOptions={{
            header: () => <Header />,
            contentStyle: { backgroundColor: colors.black },
            animation: "fade",
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="About" component={AboutPage} />
          <Stack.Screen name="Members" component={MembersPage} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}