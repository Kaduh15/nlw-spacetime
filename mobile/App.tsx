import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

import blurBg from "./src/assets/bg-blur.png";
import Stripes from "./src/assets/stripes.svg";
import NlwLogo from "./src/assets/nlw-spacetime-logo.svg";
import { styled } from "nativewind";

const StyledStipes = styled(Stripes);

export default function App() {
  const [hasLoaderFont] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!hasLoaderFont) {
    return null;
  }

  return (
    <ImageBackground
      source={blurBg}
      className="flex-1 items-center justify-center bg-zinc-950 px-8 py-10"
    >
      <StyledStipes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NlwLogo />

        <View className="space-y-2 ">
          <Text
            className="leading-tih text-center font-title text-2xl
           text-gray-50"
          >
            Sua cápsula do tempo
          </Text>
          <Text
            className="text-center font-body text-base leading-relaxed text-gray-50
          "
          >
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            COMEÇAR A CADASTRAR
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
