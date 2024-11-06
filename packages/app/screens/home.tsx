import { Text } from "ui/text";
import { View } from "ui/view";
export function Home() {
  return (
    <View className="flex items-center justify-center flex-1 dark:bg-slate-500">
      <Text className="text-base dark:text-white">
        Edit{" "}
        <Text className="text-base font-bold">
          {" "}
          packages/app/screens/home.tsx
        </Text>{" "}
        to edit this screen.
      </Text>
    </View>
  );
}
