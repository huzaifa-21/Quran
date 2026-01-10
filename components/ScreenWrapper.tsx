import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView
      className={`${colorScheme === "dark" ? "dark-theme" : "light-theme"} bg-background flex-1`}
    >
      {children}
    </SafeAreaView>
  );
}
