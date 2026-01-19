import { images } from "@/assets/data/images";
import ScreenWrapper from "@/components/ScreenWrapper";
import TextWrapper from "@/components/TextWrapper";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(false);
  async function save() {
    await SecureStore.setItemAsync("logged_in", "true");
    router.replace("/(screens)");
  }

  async function check() {
    setLoading(true);
    const value = await SecureStore.getItemAsync("logged_in");
    console.log(value);
    if (value) {
      router.replace("/(screens)");
    }
    setLoading(false);
  }

  useEffect(() => {
    check();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <ScreenWrapper>
      <View className="mt-8">
        <Image
          source={images.besmilah_png}
          resizeMode="contain"
          className="w-2/3 h-fit mx-auto"
        />
        <Image
          source={images.mushaf_png}
          resizeMode="contain"
          className="w-[300px] h-[300px] mx-auto -mt-16 "
        />
      </View>
      <View className="px-12 ">
        <TextWrapper className="text-3xl text-primary font-tajwalbo">
          مع القرأن كل يوم
        </TextWrapper>
        <TextWrapper className="tracking-widest font-mushaf  text-2xl mt-2 leading-tight opacity-65">
          هذا المصحف صمم ليكون رفيقك اليومي في التدبر والطمأنينة خط جميل ومساحة
          قراءة مريحة للقلب قبل العين. تصفح السور بدون صعوبة وارجع لآخر آية
          قرأتها بسهولة نسأل الله أن يجعل قراءتك نورًا وهداية وبركة.
        </TextWrapper>
        <TouchableOpacity
          className="py-2 border-primary mt-12 border-[1px] rounded-lg items-center"
          onPress={() => {
            save();
          }}
        >
          <Text className="text-primary text-xl font-tajwalmd pt-1">
            أرح قلبــــك
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar hidden />
    </ScreenWrapper>
  );
}
