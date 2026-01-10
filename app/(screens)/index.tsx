// import quran from "@/assets/data/quran_fixed.json";
// import Page from "@/components/Page";
// import ScreenWrapper from "@/components/ScreenWrapper";
// import { FlatList } from "react-native";
// // import { Dimensions } from "react-native";

// export default function Index() {
//   // const { width, height } = Dimensions.get("window");
//   return (
//     <ScreenWrapper>
//       <FlatList
//         // pagingEnabled
//         data={quran}
//         renderItem={({ item, index }) => (
//           <Page page={item} key={index} pageNumber={index + 1} />
//         )}
//       />
//     </ScreenWrapper>
//   );
// }

import { quranPages } from "@/assets/data/qurandata";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Index() {
  const { width, height } = Dimensions.get("window");

  return (
    <ScreenWrapper>
      <Carousel
        width={width}
        height={height}
        data={quranPages}
        renderItem={({ item }) => (
          <View className="flex-1 bg-background">
            <Image
              source={item}
              className="w-full h-full"
              resizeMode="contain"
              // style={{ width, height, resizeMode: "contain" }}
            />
          </View>
        )}
        pagingEnabled
        loop={false}
      />
    </ScreenWrapper>
  );
}
