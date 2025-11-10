import { images } from "@/assets/data/images";
import { useColorScheme } from "nativewind";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView
      className={`${colorScheme === "dark" ? "dark-theme" : "light-theme"} bg-[#F3E8D5]  flex-1`}
    >
      <View className="mt-8">
        <Image
          source={images.besmilah_png}
          resizeMode="contain"
          className="w-2/3 h-fit mx-auto "
        />
        <Image
          source={images.mushaf_png}
          resizeMode="contain"
          className="w-[300px] h-[300px] mx-auto -mt-16 "
        />
      </View>
      <View className="px-12 ">
        <Text className="text-3xl  text-right font-tajwalbo">
          مع القرأن كل يوم
        </Text>
        <Text className="text-right tracking-widest font-mushaf  text-2xl mt-2 leading-tight text opacity-65">
          هذا المصحف صمم ليكون رفيقك اليومي في التدبر والطمأنينة خط جميل ومساحة
          قراءة مريحة للقلب قبل العين. تصفح السور بدون صعوبة وارجع لآخر آية
          قرأتها بسهولة نسأل الله أن يجعل قراءتك نورًا وهداية وبركة.
        </Text>
        <TouchableOpacity className="py-2 mt-12  border-[1px] rounded-lg items-center">
          <Text className="text-xl font-tajwalmd pt-1">أبدا ألأن</Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar hidden /> */}
    </SafeAreaView>
  );
}
