import { useColorScheme } from "nativewind";
import { Switch, Text, View } from "react-native";

export default function ThemeToggler() {
  const { colorScheme = "light", setColorScheme } = useColorScheme();
  const isEnabled = colorScheme === "dark";
  const toggleSwtich = () => {
    setColorScheme(isEnabled ? "light" : "dark");
  };

  return (
    <View
      className={`${colorScheme === "dark" ? "dark-theme" : "light-theme"} flex-row items-center gap-4 `}
    >
      <Text className="text-primary">Dark Mode</Text>
      <Switch onValueChange={toggleSwtich} value={isEnabled} />
    </View>
  );
}
