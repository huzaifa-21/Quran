import { PageType } from "@/types/types";
import { numberInSurahToArabic } from "@/utils/numberInSurahToArabic";
import { View } from "react-native";
import Ayah from "./Ayah";
import TextWrapper from "./TextWrapper";

export default function Page({
  page,
  pageNumber,
}: {
  page: PageType;
  pageNumber: number;
}) {
  return (
    <View className={``}>
      <TextWrapper className="text-3xl my-4 !text-center pt-3 font-amiri font-bold bg-primary text-white">
        {`﴿             سورة ${page.titleAr}               ﴾`}
      </TextWrapper>
      <TextWrapper className="text-justify p-3 leading-loose">
        {page.text.map((ayah, index) => (
          <Ayah key={index} verseNumber={ayah.verseNumber} text={ayah.text} />
        ))}
      </TextWrapper>
      <TextWrapper className="text-center leading-loose w-[25px] h-[25px]  text-xs mt-4 mb-8 border-primary border-[0.5px] font-amiri bg-secondary mx-auto rounded-full">
        {numberInSurahToArabic(pageNumber.toString())}
      </TextWrapper>
    </View>
  );
}
