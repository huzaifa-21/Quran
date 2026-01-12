import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView className={`light-theme relative bg-background flex-1 `}>
      {children}
    </SafeAreaView>
  );
}
