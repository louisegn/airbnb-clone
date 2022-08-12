import { useRoute } from "@react-navigation/core";
import { Text, View } from "react-native";

export default function SettingsScreen() {
  const { params } = useRoute();
  return (
    <View>
      <Text>user id : {params.userId}</Text>
    </View>
  );
}
