import { TextWrapperProps } from "@/types/types";
import { Text } from "react-native";

export default function TextWrapper({ children, ...props }: TextWrapperProps) {
  return (
    <Text
      style={{ writingDirection: "rtl" }}
      className={`text-primary ${props.className}`}
    >
      {children}
    </Text>
  );
}
