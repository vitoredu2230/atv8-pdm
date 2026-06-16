import { StyleSheet, View } from "react-native";
import Card from "./card";

export default function Cards() {
  return (
    <View>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
