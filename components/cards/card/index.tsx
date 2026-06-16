import { Image, StyleSheet, Text, View } from "react-native";

type CardProps = {
  title: string;
};

export default function Card() {
  return (
    <View>
      <Image source={require("../../../assets/images/liked.png")} />
      <Text>Liked Songs</Text>
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
