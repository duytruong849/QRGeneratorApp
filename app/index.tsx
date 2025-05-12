import { Text, View } from "react-native";

var name = "Trương Ngọc Duy"
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello my name is {name}!</Text>
    </View>
  );
}
