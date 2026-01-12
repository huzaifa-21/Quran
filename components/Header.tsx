import surahs from "@/assets/data/surahs.json";
import { numberInSurahToArabic } from "@/utils/numberInSurahToArabic";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { SurahMetaData } from "../types/types";

export default function Header({
  goToPage,
  currentSurah,
}: {
  goToPage: (pageIndex: number) => void;
  currentSurah: number;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);
  const scrollViewRef = useRef<ScrollView>(null);
  const itemRefs = useRef<{ [key: number]: View | null }>({});

  // Update active surah when currentSurah changes
  useEffect(() => {
    setActive(currentSurah);
  }, [currentSurah]);

  const handleToggle = () => {
    const newOpenState = !open;
    setOpen(newOpenState);

    if (newOpenState) {
      setTimeout(() => {
        const activeItem = itemRefs.current[active];
        if (activeItem && scrollViewRef.current) {
          activeItem.measureLayout(
            scrollViewRef.current as any,
            (x, y) => {
              scrollViewRef.current?.scrollTo({
                y: y - 100,
                animated: true,
              });
            },
            () => {}
          );
        }
      }, 700);
    }
  };

  const SurahItem = ({ surahMeta }: { surahMeta: SurahMetaData }) => {
    return (
      <View
        //@ts-ignore
        ref={(ref) => (itemRefs.current[surahMeta.number] = ref)}
        collapsable={false}
      >
        <TouchableOpacity
          onPress={() => {
            goToPage(surahMeta?.startingPage);
            setActive(surahMeta.number);
            setOpen(!open);
          }}
          className={`flex flex-row px-4 items-center gap-5 justify-between mb-8 `}
        >
          <Text
            className={`font-amiri p-2 text-3xl text-center leading-[1.8] rounded-full bg-secondary items-center justify-center w-[60px] h-[60px] ${
              active === surahMeta.number ? "!bg-primary text-white" : ""
            }`}
          >
            {numberInSurahToArabic(surahMeta.number.toString())}
          </Text>
          <View className="flex-1 items-start ">
            <Text className="font-amiri text-2xl -mb-1 ">
              {surahMeta?.name.slice(5)}
            </Text>
            <Text className="font-amiri text-primary">
              آيـاتهـا{" "}
              {numberInSurahToArabic(surahMeta?.numberOfAyahs.toString())} -{" "}
              {surahMeta.revelationType === "Meccan" ? "مكية" : "مدنية"}
            </Text>
          </View>
          <Text className="font-amiri font-thin">
            الصفحة {numberInSurahToArabic(surahMeta?.startingPage.toString())}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="flex w-full  flex-row justify-between items-center px-5 relative pb-2 mt-2 ">
      <Feather name="bar-chart" size={24} className=" rotate-[270deg]" />
      <Text className="font-amiri text-xl ">
        سورة {surahs[active - 1].name.slice(5)}
      </Text>
      <TouchableOpacity>
        <Feather name="search" size={22} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleToggle}
        className="absolute left-[50%] translate-x-[-50%] -bottom-5 z-10"
      >
        <Feather
          name="chevron-down"
          size={22}
          className={`${open ? "rotate-180" : "rotate-0"} transition-all duration-200`}
        />
      </TouchableOpacity>
      {open && (
        <Animated.ScrollView
          //@ts-ignore
          ref={scrollViewRef}
          entering={FadeInUp.duration(300)}
          exiting={FadeOutUp.duration(300)}
          className="absolute top-20 left-0 w-[110%] bg-background z-10 max-h-screen-safe"
          showsVerticalScrollIndicator={false}
        >
          {surahs.map((surah, index) => (
            <SurahItem key={index} surahMeta={surah} />
          ))}
        </Animated.ScrollView>
      )}
    </View>
  );
}
