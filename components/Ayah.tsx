import { AyahProps } from "@/types/types";
import { numberInSurahToArabic } from "@/utils/numberInSurahToArabic";
import TextWrapper from "./TextWrapper";

export default function Ayah({ verseNumber, text, ...props }: AyahProps) {
  return (
    <TextWrapper
      className={`font-uthmani leading-loose text-2xl   ${props.className}`}
    >
      {text}
      <TextWrapper className="text-3xl">
        {" "}
        {numberInSurahToArabic(verseNumber)}{" "}
      </TextWrapper>
    </TextWrapper>
  );
}
