import { StyleSheet, View } from "react-native";
import Card from "./card";

export default function Cards() {
  return (
    <View style={styles.container}>
      <View>
        <Card />
        <Card />
        <Card />
      </View>

      <View>
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  divisor: {},
});
