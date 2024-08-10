import { Stack } from "expo-router";
import {useFonts} from "expo-font"

export default function RootLayout() {
  useFonts({
    'Lora-Regular':require('./../assets/fonts/Lora-Regular.ttf'),
    'Lora-Medium':require('./../assets/fonts/Lora-Medium.ttf'),
    'Lora-Bold':require('./../assets/fonts/Lora-Bold.ttf')
  })
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
