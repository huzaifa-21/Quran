import { quranPages } from "@/assets/data/qurandata";
import surahs from "@/assets/data/surahs.json";
import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import { numberInSurahToArabic } from "@/utils/numberInSurahToArabic";
import { useMemo, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, Image, Text } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

export default function Mushaf() {
  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);
  const [currentSurah, setCurrentSurah] = useState<number>(1);

  // Use useMemo to create a reversed copy without mutating the original
  const data = useMemo(() => [...quranPages].reverse(), []);

  // Function to find which surah a page belongs to
  const getSurahFromPage = (pageNumber: number) => {
    for (let i = surahs.length - 1; i >= 0; i--) {
      if (pageNumber >= surahs[i].startingPage) {
        return surahs[i].number;
      }
    }
    return 1; // Default to first surah if not found
  };

  const goToPage = (pageIndex: number) => {
    // Convert to reversed index since we're starting from the end
    const carouselIndex = data.length - pageIndex;
    // @ts-ignore
    carouselRef.current?.scrollTo({
      index: carouselIndex,
      animated: true,
    });

    // Update current surah when navigating
    const surahNumber = getSurahFromPage(pageIndex);
    setCurrentSurah(surahNumber);
  };

  const handlePageChange = (index: number) => {
    // Calculate actual page number (last index = page 1)
    const pageNumber = data.length - index;
    const surahNumber = getSurahFromPage(pageNumber);
    setCurrentSurah(surahNumber);
  };

  if (!data) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <ScreenWrapper>
      <Header goToPage={goToPage} currentSurah={currentSurah} />
      <Carousel
        ref={carouselRef}
        width={width}
        height={height}
        data={data}
        pagingEnabled
        loop={false}
        windowSize={3}
        defaultIndex={data.length - 1} // Start from the last page (page 1 of Quran)
        onSnapToItem={handlePageChange} // This is called when user swipes
        renderItem={({ item, index }) => {
          // Calculate actual page number (last index = page 1)
          const pageNumber = data.length - index;

          return (
            <Animated.View
              entering={FadeIn.duration(1000).damping(14)}
              className="flex-1 max-h-screen py-5 bg-background justify-center items-center "
            >
              <Image
                source={item}
                className={`w-[100%] h-[80%] -mt-16 mx-auto ${index === data.length - 1 || index === data.length - 2 ? "scale-[1.2] mt-16 -mb-32" : ""}`}
                resizeMode="contain"
              />

              <Text className="mb-20 border-x-transparent mt-4 text-lg font-amiri">
                {numberInSurahToArabic(pageNumber.toString())}
              </Text>
            </Animated.View>
          );
        }}
      />
    </ScreenWrapper>
  );
}
