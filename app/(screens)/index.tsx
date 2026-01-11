import { quranPages } from "@/assets/data/qurandata";
import ScreenWrapper from "@/components/ScreenWrapper";
import { numberInSurahToArabic } from "@/utils/numberInSurahToArabic";
import { useMemo, useRef } from "react";
import { ActivityIndicator, Dimensions, Image, Text } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

export default function Mushaf() {
  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);

  // Use useMemo to create a reversed copy without mutating the original
  const data = useMemo(() => [...quranPages].reverse(), []);

  const goToPage = (pageIndex: number) => {
    // Convert to reversed index since we're starting from the end
    const carouselIndex = data.length - pageIndex;
    // @ts-ignore
    carouselRef.current?.scrollTo({
      index: carouselIndex,
      animated: true,
    });
  };

  if (!data) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <ScreenWrapper>
      <Carousel
        ref={carouselRef}
        width={width}
        height={height}
        data={data}
        pagingEnabled
        loop={false}
        windowSize={3}
        defaultIndex={data.length - 1} // Start from the last page (page 1 of Quran)
        renderItem={({ item, index }) => {
          // Calculate actual page number (last index = page 1)
          console.log(index);
          const pageNumber = data.length - index;

          return (
            <Animated.View
              entering={FadeIn.duration(1000).damping(14)}
              className="flex-1 max-h-screen py-5 bg-background justify-center items-center gap-3"
            >
              <Image
                source={item}
                className={`w-[100%] h-[80%] mx-auto ${index === data.length - 1 || index === data.length - 2 ? "scale-[1.2]" : ""}`}
                resizeMode="contain"
              />

              <Text className="mb-12  border-x-transparent text-lg font-amiri">
                {numberInSurahToArabic(pageNumber.toString())}
              </Text>
            </Animated.View>
          );
        }}
      />
    </ScreenWrapper>
  );
}
