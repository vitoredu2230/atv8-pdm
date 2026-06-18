import { colors } from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/liked.png")}
      />
      <Text style={styles.text}>Liked Songs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: colors.button,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: "#ffffff",
    marginLeft: 15,
    paddingRight: 15,
  },
});
