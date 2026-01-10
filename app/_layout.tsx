import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { I18nManager } from "react-native";
import "../global.css";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Amiri-Regular": require("../assets/fonts/Amiri_Quran/AmiriQuran-Regular.ttf"),
    "Tajawal-Regular": require("../assets/fonts/Tajawal/Tajawal-Regular.ttf"),
    "Tajawal-Medium": require("../assets/fonts/Tajawal/Tajawal-Medium.ttf"),
    "Tajawal-Bold": require("../assets/fonts/Tajawal/Tajawal-Bold.ttf"),
    "Tajawal-Black": require("../assets/fonts/Tajawal/Tajawal-Black.ttf"),
    "Tajawal-Light": require("../assets/fonts/Tajawal/Tajawal-Light.ttf"),
    Mushaf: require("../assets/fonts/mushaf.ttf"),
    uthmani: require("../assets/fonts/hafs.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(screens)/index" />
    </Stack>
  );
}
